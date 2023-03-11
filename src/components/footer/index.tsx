import { useState, useEffect } from 'react';

export default function Footer(props: any) {

    const h = props.fullScreen? " h-screen" : " h-16"

    const [year, setYear] = useState(null);

    useEffect(() => {
        fetch('/api/year')
            .then(res => res.json())
            .then(data => setYear(data.year))
            .catch(error => console.error(error));
    }, []);

    return (
        <section className={"relative w-screen bg-neutral-900"+h}>

            <footer className={"w-screen bg-neutral-800 flex flex-col items-center justify-center text-gray-400 font-medium"+h}>
                <h3>Copyright Alexander Schnabl {year}, <a href="/imprint" className="hover:underline">Imprint</a></h3>
                <span>Website hosted by
                    <a href="https://www.ss-technologies.at" target="_blank" className="pl-1 hover:underline">S&S Technologies
                        GmbH</a></span>
            </footer>
        </section>
    )
}
