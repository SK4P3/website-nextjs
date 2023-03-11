import Navbar from "@/components/navbar";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import fbsettings from './fbsettings.png';
import sslProxyList from './sslProxyList.png';
import igsettings from './igsettings.png';
import proxymanResult from './proxymanResult.png';
import CommentSection from "@/components/comments";
import Footer from "@/components/footer";
import Head from "next/head";
// todo get blogs from bucket/persistent storage
export default function article1() {

    const network_security_config_xml = `<network-security-config>
    <domain-config>
        <domain includeSubdomains="true">i.instagram.com</domain>
        <trust-anchors>
            <certificates src="user" />
            <certificates src="system" />
        </trust-anchors>
    </domain-config>

    <debug-overrides>
        <trust-anchors>
            <certificates src="user" />
            <certificates src="system" />
        </trust-anchors>
    </debug-overrides>

    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>`

    return (
        <div className="w-screen bg-neutral-900 text-white pt-[10vh] overflow-visible scroll-y">
            <Head>
                <title>Using Proxyman to reverse engineer the Instagram private API</title>
                <meta name="description" content="The Instagram API traffic is encrypted using SSL/HTTPS. In this post I explain how to build a modified Instagram APK and use Proxyman and a custom certificate to intercetp the traffic sent by the app." />
                <meta name="keywords" content="Instagram private API, Patching Instagram APK, Proxyman reverse engineering, Reverse engineering Instagram, Instagram API insights, Understanding Instagram platform, Instagram data analysis, Instagram engagement optimization, Instagram platform control, reverse engineering, API, Sniffing, Android, Instagram, macOS, Proxy, Debug, Debugging," />
            </Head>
            <Navbar showDots={false}></Navbar>
            <div className="article">
                <a href="/blog">back</a>
                <h1 className="article-h1">Using Proxyman to reverse engineer the Instagram private API</h1>
                <p className="article-h2">Overview</p>
                <ul className="article-overview-list">
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#whitehatsettings">Enable Whitehat settings on Facbook Profile</a></li>
                    <li><a href="#patchingapk">Patching the Instagram APK</a></li>
                    <li><a href="#emulatorsetup">Setting up the Emulator</a></li>
                    <li><a href="#proxyman">Using Proxyman to intercept encrypted traffic</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>
                <div className="article-content">
                    <span className="anchor" id="introduction"></span>
                    <p className="article-h2">Introduction</p>
                    <p>
                        In recent years social media platofrms like Instagram have become ingrained in our daily routines and have a tremendous impact on our society.
                        To utilize these platforms to their full potential one might consider automating certain workflows. In this example we will look at Instagram.
                        While Instagram's official API is available for developers, it only provides access to a very limited set of functions.
                        However, with the help of various reverse engineering techniques, developers can monitor Instagram's private API and unlock additional
                        features. In this article we will explore how to patch the Instagram APK and use
                        Proxyman, <a rel="nofollow" target="_blank" href="https://proxyman.io/">a popular proxy tool</a>, to reverse engineer
                        the Instagram private API. By the end of this article, you will have a better understanding of
                        how to patch an APK and how to leverage reverse engineering techniques to peek into APIs they dont want you to see.
                    </p>
                    <span className="anchor" id="whitehatsettings"></span>
                    <h2 className="article-h2">Enable Whitehat settings on Facbook Profile</h2>
                    <p>
                        (This step is not neccessarry because we are patching the APK and we will be overriding the emulator certificate but I included it anyways)
                    </p>
                    <ul className="article-list">
                        <li>
                            Goto the <a rel="nofollow" target="_blank" href="https://www.facebook.com/whitehat/researcher-settings/">Researcher Settings</a> for your account and select following options.
                            <Image src={fbsettings} alt="Researcher Settings on Facebook" className="rounded-md my-4" />
                        </li>
                    </ul>
                    <span className="anchor" id="patchingapk"></span>
                    <h2 className="article-h2">Patching the Instagram APK</h2>
                    <h3 className="article-h3">Approaches</h3>
                    <p>
                        When I started this project I had to choice of how to approach the problem, that the Instagram app locks the certificate
                        and wont let you use your own right out of the box. There are multiple solutions that I have
                        tried: you can <a rel="nofollow" target="_blank" href="https://plainsec.org/how-to-bypass-instagram-ssl-pinning-on-android-v78/">patch the shared object libraries</a>,
                        however this is quite complicated for beginners and the decompiled
                        code varies from version to version. The easier solution is to open, patch and rebuild the APK yourself.
                    </p>
                    <h3 className="article-h3">Opening the APK</h3>
                    <p>
                        We want to extract the contents of the APK, modify its content and rebuild it so we can use the patched app on our own device.
                        When operation on APK applications I like to
                        use <a rel="nofollow" target="_blank" href="https://github.com/APKLab/APKLab">APKLab</a>, a VS Code
                        extension that helps with basic functionalities.
                    </p>
                    <ul className="article-list">
                        <li>
                            <a rel="nofollow" target="_blank" href="https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-instagram-240-2-0-18-107-release/instagram-240-2-0-18-107-18-android-apk-download/">Dowload the APK</a> and open the folder in VS Code.
                            It is important to use this version, as newer versions have restrictions, that will no work for our usecase. Also make
                            sure that the distribution matches the one you use for your emulator. In my case its x86.
                        </li>
                        <li>
                            To open the APK, just open the folder where you saved it to in VS code and press <b className="keyboard-shortcut">CTRL+SHIFT+P</b>,
                            and select <i>APKLab: Open an APK</i> and uncheck <b className="keyboard-shortcut">--only-main-classes</b>.
                        </li>
                    </ul>
                    <h3 className="article-h3">Patching the APK</h3>
                    <p>
                        Now that we have to contents of the Instagramm APK we can start to modify it so it fitts our usecase. We will have to modify the
                        network_security_config.xml, AndroidManifext.xml and edit/delete a few entries, that prevent the app from rebuilding.
                    </p>
                    <ul className="article-list">
                        <li>
                            Delete <b className="keyboard-shortcut">res/xml/fb_network_security_config.xml</b>
                        </li>
                        <li>
                            Create the file <b className="keyboard-shortcut">res/xml/network_security_config.xml</b> with the content:
                            <div className="h-1 my-2" />
                            <CopyBlock
                                text={network_security_config_xml}
                                language="html"
                                theme={dracula}
                                wrapLines
                            />
                        </li>
                        <li>
                            Replace <b className="keyboard-shortcut">fb_network_security_config</b>&nbsp;in&nbsp;
                            <b className="keyboard-shortcut">res/values/private.xml</b> and <b className="keyboard-shortcut">AndroidManifest.xml</b>,
                            with <b className="keyboard-shortcut">network_security_config</b>
                        </li>
                        <li>
                            Remove <b>line 4564</b> <i>{`<item name="android:textColorHint">@color/igds_tertiary_text</item>`}</i> in <b className="keyboard-shortcut">res/values/styles.xml</b>
                        </li>
                        <li>
                            Delete <b className="keyboard-shortcut">assets/drawables.bin</b>
                        </li>
                    </ul>
                    <h3 className="article-h3">Rebuilding the APK</h3>
                    <p>
                        Now that we have patched the APK we can rebuild it to flash it on our device. This step is really simple.
                    </p>
                    <ul className="article-list">
                        <li>
                            Right-click <i>apktool.yaml</i> and select <b className="keyboard-shortcut">APKLab: Rebuild the APK</b> and
                            uncheck <b className="keyboard-shortcut">--use-aapt2</b>
                        </li>
                    </ul>
                    <span className="anchor" id="emulatorsetup"></span>
                    <h2 className="article-h2">Setting up the Emulator</h2>
                    <p>
                        The easiest way to set up an Android Emulator for our usecase is Android Studio. In this step we will download Android Studio
                        and set up a new emulated device.
                    </p>
                    <ul className="article-list">
                        <li>
                            <a rel="nofollow" target="_blank" href="https://developer.android.com/studio">Dowload Android Studio</a> and install it.
                        </li>
                        <li>
                            Create a new Android Studio Project with a Basic Activity.
                        </li>
                        <li>
                            To create a new Android Emulator, first open the <b className="keyboard-shortcut">Device Manager</b> on the top
                            right of the screen.
                            Then create a device with following Specifications: <b className="keyboard-shortcut">Release: Q, API Level: 29, ABI: x86, Target: Android 10.0</b>
                        </li>
                        <li>
                            To flash our patched APK, simply start the Device and drag and dropp the patched APK into the Device. <br />
                            (The patched APK is in the <b>dist/</b> folder)
                        </li>
                        <li>
                            Now open the patched app and use <b>Login with Facebook</b> and sign into your account where you enabled the whitehat settings.
                        </li>
                        <li>
                            Go to your Profile, Settings, Internal, Whitehat Settings and enable following options: (This is not neccessarry because we are overriding the emulator certificate but I included it anyways)
                            <Image src={igsettings} alt="Instagram Options" className="rounded-md my-4" />
                        </li>
                    </ul>
                    <span className="anchor" id="proxyman"></span>
                    <h2 className="article-h2">Using Proxyman to intercept encrypted traffic</h2>
                    <p>
                        Now that we are ready to intercept and decrypt the traffic that the Instagram app uses to communicate with
                        its private API we can setup Proxyman and capture the requests.
                    </p>
                    <ul className="article-list">
                        <li>
                            <a rel="nofollow" target="_blank" href="https://proxyman.io/">Dowload Proxyman</a> and install it.
                        </li>
                        <li>
                            Enable the following domains in the Proxyman <b className="keyboard-shortcut">Tools/SSL Proxying List</b>
                            <Image src={sslProxyList} alt="SSL Proxy Domain List" className="rounded-md my-4" />
                        </li>
                        <li>
                            Install the Certificate on your Emulator <b className="keyboard-shortcut">Certificate/Install Certificate on Android/Emulators</b> and
                            hit <b className="keyboard-shortcut">Override Emulator</b>. Make sure you have all the dependencies installed and that the Emulator is running.
                        </li>
                        <li>
                            If you have done everything correctly, you should see the traffic in your Proxyman app when using Instagram on the Emulator!
                            <Image src={proxymanResult} alt="SSL Proxy Domain List" className="rounded-md my-4" />
                        </li>
                    </ul>
                    <span className="anchor" id="conclusion"></span>
                    <h2 className="article-h2">Conclusion</h2>
                    <p>
                        In conclusion I can say that patching the Instagram APK and using Proxyman to reverse engineer the Instagram private API
                        can be a powerful tool for those looking to gain more insights and control over the Instagram platform and develop their own
                        applications and automations ontop of it.
                        While this process does involve some basic technical expertise and some potential risks, it can provide valuable data and
                        insights that are otherwise hidden behind encryption. It's important to note that reverse engineering and API
                        with malicious intent is illegal and can have serious consequences.
                        If you're considering this process be sure to proceed with caution and always prioritize ethical and legal practices.
                        Overall I dont consider the process to be overly difficult and anyone should be able to follow the steps I described above.
                        Be sure to leave a comment and also check out my other posts for more content like this!
                    </p>
                </div>
                <CommentSection />
            </div>
            <Footer />

        </div>
    )
}