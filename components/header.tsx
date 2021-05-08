export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex items-center h-16 px-6 bg-white border-b border-gray-200 dark:bg-dark">
      <div className="flex items-baseline w-full">
        <span className="mr-2 text-2xl font-extrabold dark:text-white">
          Riccardo Sacco
        </span>
        <span className="text-gray-500">Full Stack Developer</span>
      </div>
      {/* Dark mode toggle */}
      <a className="p-2 text-current cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </a>
      {/* Language toggle */}
      <a className="p-2 text-current cursor-pointer">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          ></path>
        </svg>
      </a>
    </header>
  );
}
