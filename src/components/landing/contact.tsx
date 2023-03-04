import linkedin from '../../../public/socials/linkedin.png';
import discord from '../../../public/socials/discord.png';
import telegram from '../../../public/socials/telegram.png';
import mail from '../../../public/socials/mail.png';


import Image from 'next/image';

export default function LandingContact() {
    return (
        <section className="relative h-screen w-screen bg-neutral-900">
            <div className="absolute top-8 h-[92vh] w-screen flex flex-col sm:flex-row items-center justify-center gap-8">
                <a className="contactCard bg-[#0077b7] " target="_blank" href="https://at.linkedin.com/in/alexander-schnabl-b5508216a">
                    <Image src={linkedin} alt="contact alexander schnabl on LinkedIn" className="h-full w-full object-contain" />
                </a>
                <a className="contactCard bg-[#5865f2]" target="_blank" href="https://discordapp.com/users/415490584665522177">
                    <Image src={discord} alt="contact alex schnabl on Discord" className="h-full w-full object-contain" />
                </a>
                <a className="contactCard bg-[#29a9eb]" target="_blank" href="https://t.me/botlx">
                    <Image src={telegram} alt="contact alex schnabl on Telegram" className="h-full w-full object-contain" />
                </a>
                <a className="contactCard bg-gradient-to-b from-[#5770ff] to-[#70edff]" target="_blank"
                    href="mailto:alexander.schnabl@ss-technologies.at">
                    <Image src={mail} alt="contact alexander schnabl via Mail" className="h-full w-full object-contain" />
                </a>
            </div>
        </section>
    )
}