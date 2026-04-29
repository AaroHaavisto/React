import {Link} from 'react-router';

const Navigation = ({user}) => {
  return (
    <nav className="px-4 pt-5 md:px-5 md:pt-6">
      <ul className="flex flex-wrap justify-center gap-2 p-0 text-center *:list-none">
        <li className="list-none">
          <Link
            className="inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_70%,white_30%)] px-4 py-2 text-sm font-bold tracking-[0.03em] text-[var(--text-h)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklab,var(--accent)_18%,white_82%)] hover:shadow-[0_7px_16px_-12px_rgba(0,0,0,0.6)]"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="list-none">
          <Link
            className="inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_70%,white_30%)] px-4 py-2 text-sm font-bold tracking-[0.03em] text-[var(--text-h)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklab,var(--accent)_18%,white_82%)] hover:shadow-[0_7px_16px_-12px_rgba(0,0,0,0.6)]"
            to="/about"
          >
            About
          </Link>
        </li>
        {!user && (
          <li className="list-none">
            <Link
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_70%,white_30%)] px-4 py-2 text-sm font-bold tracking-[0.03em] text-[var(--text-h)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklab,var(--accent)_18%,white_82%)] hover:shadow-[0_7px_16px_-12px_rgba(0,0,0,0.6)]"
              to="/login"
            >
              Login
            </Link>
          </li>
        )}
        {user && (
          <li className="list-none">
            <Link
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_70%,white_30%)] px-4 py-2 text-sm font-bold tracking-[0.03em] text-[var(--text-h)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklab,var(--accent)_18%,white_82%)] hover:shadow-[0_7px_16px_-12px_rgba(0,0,0,0.6)]"
              to="/logout"
            >
              Logout
            </Link>
          </li>
        )}
        {user && (
          <li className="list-none">
            <Link
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_70%,white_30%)] px-4 py-2 text-sm font-bold tracking-[0.03em] text-[var(--text-h)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklab,var(--accent)_18%,white_82%)] hover:shadow-[0_7px_16px_-12px_rgba(0,0,0,0.6)]"
              to="/profile"
            >
              Profile
            </Link>
          </li>
        )}
        {user && (
          <li className="list-none">
            <Link
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_70%,white_30%)] px-4 py-2 text-sm font-bold tracking-[0.03em] text-[var(--text-h)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklab,var(--accent)_18%,white_82%)] hover:shadow-[0_7px_16px_-12px_rgba(0,0,0,0.6)]"
              to="/upload"
            >
              Upload
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
