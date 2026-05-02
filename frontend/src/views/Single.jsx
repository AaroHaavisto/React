import {useLocation, useNavigate} from 'react-router';
import Likes from '../components/Likes';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const {item} = state;

  if (!item) {
    return null;
  }

  return (
    <section className="mx-auto max-w-190 rounded-[18px] border border-(--border) bg-[color-mix(in_oklab,var(--card-bg)_90%,white_10%)] p-4 text-left shadow-(--shadow) max-md:p-[0.85rem]">
      <button
        className="cursor-pointer rounded-full border border-[color-mix(in_oklab,var(--accent)_50%,var(--border)_50%)] bg-[color-mix(in_oklab,var(--accent)_20%,white_80%)] px-3.5 py-1.5 font-bold text-[#4e250b]"
        onClick={() => navigate(-1)}
        type="button"
      >
        Takaisin
      </button>
      <h2>{item.title}</h2>
      <p className="mb-3 mt-1 text-[color-mix(in_oklab,var(--text)_78%,black_22%)] font-bold">
        Owner: {item.username}
      </p>
      <img
        className="max-h-120 w-full rounded-[14px] border border-(--border) object-cover"
        src={item.filename}
        alt={item.title}
      />
      <p className="mt-3 leading-normal">{item.description}</p>
      <Likes item={item} />
    </section>
  );
};
export default Single;
