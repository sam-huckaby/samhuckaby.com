import Head from 'next/head';

import ContactButton from '../components/contactButton.component';

import styles from '/styles/index.module.scss';
import { ProjectListing, ProjectProps } from '../components/ProjectListing.component';

export default function Home() {
  const projects: ProjectProps[] = [
    {
      name: "Laraml",
      link: "https://laraml.com/",
      description: "[IN DEVELOPMENT] OCaml is a beautiful language, but it lacks the strong Web-based app framework that many other languages already have. One of the best examples of these kinds of app frameworks is Laravel, an opinionated PHP framework that lets you build a complete app in virtually seconds. I love Laravel, so I am working to bring a similar sort of experience to OCaml, so that we can rapidly prototype project ideas in 'the beautiful language'.",
      tech: [
        { link: "https://ocaml.org/", name: "OCaml" },
        { link: "https://htmx.org/", name: "Htmx" },
        { link: "https://aantron.github.io/dream/", name: "Dream" },
        { link: "https://github.com/leostera/minttea", name: "Mint Tea" },
      ],
      repos: ["https://github.com/sam-huckaby/laraml"],
    },
    {
      name: "Camelaunch",
      link: "https://camelaunch.com/",
      description: "[IN DEVELOPMENT] I love OCaml and indie hacking, but it has been historically difficult to use OCaml for indie hacking because it is complicated to deploy. Camelaunch is going to be a deployment management app that allows you to link an OCaml GitHub repo (structured in a certain way to start) and input your Digital Ocean token to deploy your app in one click.",
      tech: [
        { link: "https://www.php.net/", name: "PHP" },
        { link: "https://laravel.com/", name: "Laravel" },
        { link: "https://www.digitalocean.com/", name: "Digital Ocean" },
        { link: "https://forge.laravel.com/", name: "Laravel Forge" },
      ],
      repos: ["https://github.com/sam-huckaby/camelaunch"],
    },
    {
      name: "HomeThink",
      link: "https://www.homethink.org/",
      description: "A place for parents and students to partner together to learn and grow. I'm adding new exercises as I hear about more student work in local schools. My goal is to assist both public school and home school parents in their journey to raise and educate our next generation.",
      tech: [
        { link: "https://nextjs.org/", name: "NextJS" },
        { link: "https://tailwindcss.com/", name: "TailwindCSS" },
        { link: "https://vercel.com/", name: "Vercel" },
      ],
      repos: ["https://github.com/sam-huckaby/kindergarten"],
    },
    {
      name: "Bit Conquest",
      link: "https://www.bitconquest.com/",
      description: "A place for developers to showcase all of the awesome domains they have acquired!",
      tech: [
        { link: "https://nextjs.org/", name: "NextJS" },
        { link: "https://tailwindcss.com/", name: "TailwindCSS" },
        { link: "https://vercel.com/", name: "Vercel" },
        { link: "https://supabase.com/", name: "Supabase" },
      ],
      repos: ["https://github.com/sam-huckaby/bitconquest"],
    },
    {
      name: "WHNVR",
      link: "https://whnvr.com/",
      description: "The anti-social network, where people can go to scream into the void. Messages live for 24 hours before self-destructing. WHNVR leverages passkeys for a completely secure and completely seamless login flow that makes it easy to post and eliminates the fear of account takeover.",
      tech: [
        { link: "https://ocaml.org/", name: "OCaml" },
        { link: "https://htmx.org/", name: "Htmx" },
        { link: "https://aantron.github.io/dream/", name: "Dream" },
        { link: "https://beyondidentity.com/", name: "Passkeys" },
        { link: "https://supabase.com/", name: "Supabase" },
        { link: "https://fly.io/", name: "Fly.io" },
      ],
      repos: ["https://github.com/sam-huckaby/whnvr"],
    },
    {
      name: "Huckabytes",
      link: "https://youtube.com/@TheSamHuckaby",
      description: "Byte-sized learning videos that cover topics I'm currently interested in, relating to my job or indie hacking projects.",
      tech: [
        { link: "https://www.shure.com/en-US/products/microphones/mv7?variant=MV7-K", name: "Shure MV7 Mic" },
      ],
      repos: [],
    },
    {
      name: "Fuel PM (Project Management)",
      link: "https://fuelpm.com",
      description: "[TEMPORARILY OFFLINE] Project management should fuel your organization, not slow it down and annoy it. Fuel is a mobile-first project management tool that is designed to be used as little as possible.",
      tech: [
        { link: "https://nextjs.org/", name: "NextJS" },
        { link: "https://tailwindcss.com/", name: "TailwindCSS" },
        { link: "https://vercel.com/", name: "Vercel" },
        { link: "https://supabase.com/", name: "Supabase" },
      ],
      repos: ["https://github.com/sam-huckaby/fuelpm.com"],
    },
  ];

  return <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-bl from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900">
    <Head>
      <title>Sam Huckaby - Sr. Software Engineer</title>
      <meta name="description" content="Professional profile for Sam Huckaby, Sr. Software Engineer" />
      <meta property="og:title" content="Sam Huckaby - Sr. Software Engineer" />
      <meta
        property="og:description"
        content="Professional profile for Sam Huckaby, Sr. Software Engineer"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <main className="grid grid-cols-3 gap-2 w-full p-8 max-w-4xl">
      <div className="col-span-3 md:col-span-1">
        <div className="text-left"><h1 className="text-6xl font-bold dark:text-white"><p>Sam</p><p>Huckaby</p></h1></div>
        <div className="text-left text-red-500 dark:text-red-400 text-4xl font-bold">Sr. Software Engineer</div>
      </div>
      <div className="pt-5 pb-5 items-start md:items-center justify-end md:justify-center flex flex-col col-span-3 md:col-span-2">
        <ContactButton></ContactButton>
      </div>
      <div className={`${styles['label-top-border']} col-span-3 md:col-span-1 font-bold pt-3 pb-1 dark:text-white text-2xl md:text-base`}>
        <p>Profile</p>
      </div>
      <div className="pt-3 pb-1 border-t-4 border-black dark:text-white col-span-3 md:col-span-2">
        <p className='py-2'>A curious developer and people person who likes to build new things. I enjoy making "techie" understandable to regular people. I have spent the last decade working in web technologies like Angular, Node, React, and NextJS both in team member and team lead roles. I love a challenge, whether it’s learning a new programming language or a new technical stack. I love to help other developers reach their full potential.</p>
        <p className='py-2'>I am always learning, usually a new programming language or framework. Currently I am learning OCaml and Go, and experimenting with the Laravel framework. I plan to learn Rust next, once I have a good project to work on. My own experience makes me fond of indie hacking and I am currently working on tooling that will make it easier to take OCaml web apps to production faster. You can learn more about my current silly side projects below.</p>
      </div>
      <div className={`${styles['label-top-border']} col-span-3 md:col-span-1 font-bold pt-3 pb-1 dark:text-white text-2xl md:text-base`}>
        <p>Experience</p>
      </div>
      <div className="border-t-4 border-black flex flex-col col-span-3 md:col-span-2">
        <div className="pt-3 pb-1 dark:text-white">
          <div><span className="font-bold text-red-500">Beyond Identity</span>&nbsp;/&nbsp;<span>Sr. Software Engineer</span></div>
          <div className="text-gray-500 dark:text-zinc-300 text-xs">March 2022 - PRESENT,  Remote, NY</div>
          <div className="pt-2 pb-2">Front-end developer specializing in React and NextJS. Working on web-based admin portals for secure workforce and secure customer product lines. Contributing member of a team of front-end developers who support the whole company.</div>
        </div>
        <div className="pt-3 pb-1 dark:text-white">
          <div><span className="font-bold text-red-500">Comcast, Inc</span>&nbsp;/&nbsp;<span>Sr. Software Engineer</span></div>
          <div className="text-gray-500 dark:text-zinc-300 text-xs">June 2016 - March 2022,  Denver, CO</div>
          <div className="pt-2 pb-2">Full-stack Angular/NodeJS developer who brought multiple Java microservices together into a dynamic, web-based, advertising portal. The only UI developer on a team of nine.</div>
        </div>
        <div className="pt-3 pb-1 dark:text-white">
          <div><span className="font-bold text-red-500">Levels Beyond</span>&nbsp;/&nbsp;<span>Software Engineer</span></div>
          <div className="text-gray-500 dark:text-zinc-300 text-xs">July 2015 - June 2016,  Denver, CO</div>
          <div className="pt-2 pb-2">Full-stack AngularJS/NodeJS developer who worked with a team of UI developers to ingest and utilize two main Java backend services.</div>
        </div>
        <div className="pt-3 pb-1 dark:text-white">
          <div><span className="font-bold text-red-500">ClickFox</span>&nbsp;/&nbsp;<span>Software Engineer</span></div>
          <div className="text-gray-500 dark:text-zinc-300 text-xs">March 2014 - July 2015,  Denver, CO</div>
          <div className="pt-2 pb-2">AngularJS developer who worked to convert an Apache Flex app into HTML5/JS while also building new features. Managed an off-shore team in India of UI developers as well.</div>
        </div>
        <div className="pt-3 pb-1 dark:text-white">
          <div><span className="font-bold text-red-500">ClickFox</span>&nbsp;/&nbsp;<span>Associate QA Engineer</span></div>
          <div className="text-gray-500 dark:text-zinc-300 text-xs">October 2013 - March 2014,  Denver, CO</div>
          <div className="pt-2 pb-2">Worked alongside a team of QA Engineers to leverage automated testing frameworks, such as SOAPUI and Selenium to test the existing Apache Flex UI, as well as handling manual testing as needed.</div>
        </div>
      </div>
      <div className={`${styles['label-top-border']} col-span-3 md:col-span-1 font-bold pt-3 pb-1 dark:text-white text-2xl md:text-base`}>
        <p>Education</p>
      </div>
      <div className="border-t-4 border-black flex flex-col col-span-3 md:col-span-2">
        <div className="pt-3 pb-1 dark:text-white">
          <div><span className="font-bold text-red-500">Cameron University</span>&nbsp;/&nbsp;<span>Bachelors of Science (CS)</span></div>
          <div className="text-gray-500 dark:text-zinc-300 text-xs">August 2009 - May 2012,  Lawton, OK</div>
          <div className="pt-2 pb-2">My degree in Computer science focused most heavily on C-based languages, with the introduction of Java my senior year into the curriculum. I also minored in math, but I promise I’m not actually that boring.</div>
        </div>
      </div>
      <div className={`${styles['label-top-border']} col-span-3 md:col-span-1 font-bold pt-3 pb-1 dark:text-white text-2xl md:text-base`}>
        <p>Projects</p>
      </div>
      <div className="border-t-4 border-black flex flex-col col-span-3 md:col-span-2">
        {projects.map(({ name, description, link, tech, repos }) => <ProjectListing key={name} name={name} description={description} link={link} tech={tech} repos={repos} />)}
      </div>
    </main>

    <footer className="flex flex-col items-center justify-center w-full h-24">
      <p className='dark:text-neutral-200 py-2 border-t-2 border-solid border-gray-500/50'>
        Made with
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 inline text-red-600"
        >
          <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
          <path d="M17.64 15 22 10.64"></path>
          <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path>
        </svg> by{' '}
        <a
          href='https://twitter.com/samhuckaby'
          target='_blank'
          rel='noreferrer'
          className='underline underline-offset-4'
        >
          Sam Huckaby
        </a>
      </p>
      <span className="flex items-center justify-center dark:text-white">
        Powered by &nbsp; <span className="text-red-600 font-bold">blood, sweat, and tears</span>
      </span>
    </footer>
  </div>
}
