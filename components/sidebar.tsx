import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";
import classnames from "classnames";

const navigation = [
  {
    active: true,
    label: "About Me",
    href: "/",
    icon: "fa fa-user",
  },
  {
    active: false,
    label: "Portfolio",
    href: "/portfolio",
    icon: "fa fa-laptop-code",
  },
  {
    active: false,
    label: "Resume",
    href: "/resume",
    icon: "fa fa-file-alt",
  },
  {
    active: false,
    label: "Contact",
    href: "/contact",
    icon: "fa fa-envelope-open-text",
  },
];

const social = [
  {
    name: "facebook",
    href: "https://www.facebook.com/riccardo.sacco.90",
    color: "bg-blue-800",
  },
  {
    name: "github",
    href: "https://github.com/riccardosacco/",
    color: "bg-gray-800",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/riccardo-sacco",
    color: "bg-blue-600",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/riccardosacco10/",
    color: "bg-gradient-to-tr from-yellow-500 to-pink-600",
  },
];

const contacts = [
  {
    href: "tel:+393391848457",
    value: "+39 339 1848457",
    icon: "phone-alt",
  },
  {
    href: "mailto:riccardo@itwebservices.it",
    value: "riccardo@itwebservices.it",
    icon: "envelope-open-text",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed bottom-0 z-10 flex flex-col justify-between w-64 p-4 border-r border-gray-200 dark:border-gray-800 top-16">
      <div>
        <div className="text-center">
          <Image
            className="rounded-full"
            src="/avatar.png"
            alt="Riccardo Sacco"
            width={160}
            height={160}
          />
          <p className="text-sm tracking-wide text-gray-600 dark:text-white">
            Hi, my name is Riccardo Sacco and I'm a Full Stack Developer.
            Welcome to my website!
          </p>
          <div className="flex mt-4 justify-evenly">
            {social.map(({ name, href, color }) => {
              const icon = name as IconName;

              return (
                <a
                  key={name}
                  href={href}
                  className={classnames(
                    "p-2 rounded-full opacity-90 hover:opacity-100",
                    color
                  )}
                >
                  <FontAwesomeIcon
                    icon={["fab", icon]}
                    className="w-4 h-4 text-white"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <ul className="mt-4 space-y-1">
          {navigation.map(({ label, href, icon, active }) => (
            <li key={href}>
              <a
                href={href}
                className={classnames("flex p-2 rounded", {
                  "font-semibold bg-gray-100 dark:text-white dark:bg-gray-800":
                    active,
                  "text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white":
                    !active,
                })}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {contacts.map(({ href, icon, value }) => {
          return (
            <li key={href}>
              <a
                href={href}
                className="flex items-center py-1 space-x-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FontAwesomeIcon
                  icon={["fas", icon as IconName]}
                  className="w-3.5 h-3.5"
                />
                <span>{value}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
