import { Gear, Globe, House, Question, Sun } from "phosphor-react";
import logo from "./assets/images/logo.png";
import NavigationMenu from "./NavigationMenu";

export function Header() {
  return (
    <header className="flex justify-between bg-white px-8 text-stone-900">
      <div className="flex items-center gap-6">
        <a>
          <House size={24} color="#424242" weight="fill" />
        </a>
        <a>
          <img src={logo} alt="Binance Logo" className="w-24" />
        </a>
        <NavigationMenu />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium">
            Log In
          </button>
          <button className="font-regular rounded bg-yellow-300 px-3 py-1.5 text-sm font-medium">
            Sign Up
          </button>
        </div>
        <button>
          <Globe size={24} color="#424242" weight="fill" />
        </button>
        <button>
          <Question size={24} color="#424242" weight="fill" />
        </button>
        <button>
          <Gear size={24} color="#424242" weight="fill" />
        </button>
        <button>
          <Sun size={24} color="#424242" weight="fill" />
        </button>
      </div>
    </header>
  );
}
