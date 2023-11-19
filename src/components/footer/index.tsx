import Image from "next/image";
import Link from "next/link";

const Phone = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.24375 3.39531L3.73984 0.901563C3.91592 0.724712 4.1252 0.584392 4.35567 0.488665C4.58614 0.392938 4.83325 0.34369 5.08281 0.34375C5.59141 0.34375 6.06953 0.542969 6.42812 0.901563L9.11406 3.5875C9.29091 3.76358 9.43123 3.97286 9.52696 4.20333C9.62269 4.4338 9.67193 4.68091 9.67187 4.93047C9.67187 5.43906 9.47266 5.91719 9.11406 6.27578L7.15 8.23984C7.60974 9.25319 8.24893 10.175 9.03672 10.9609C9.82253 11.7506 10.7443 12.3922 11.7578 12.8547L13.7219 10.8906C13.898 10.7138 14.1072 10.5735 14.3377 10.4777C14.5682 10.382 14.8153 10.3328 15.0648 10.3328C15.5734 10.3328 16.0516 10.532 16.4102 10.8906L19.0984 13.5742C19.2755 13.7506 19.4159 13.9603 19.5117 14.1912C19.6074 14.4221 19.6565 14.6696 19.6562 14.9195C19.6562 15.4281 19.457 15.9062 19.0984 16.2648L16.607 18.7562C16.0352 19.3305 15.2453 19.6562 14.4344 19.6562C14.2633 19.6562 14.0992 19.6422 13.9375 19.6141C10.7781 19.0938 7.64453 17.4133 5.11562 14.8867C2.58906 12.3625 0.910936 9.23125 0.383593 6.0625C0.224218 5.09453 0.545312 4.09844 1.24375 3.39531V3.39531Z"
      fill="#ffffff"
    />
  </svg>
);

const Email = () => (
  <svg
    width="21"
    height="16"
    viewBox="0 0 21 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.644 0.799988H18.544C20.044 0.799988 20.8 1.50799 20.8 2.94799V13.052C20.8 14.48 20.044 15.2 18.544 15.2H2.644C1.144 15.2 0.388 14.48 0.388 13.052V2.94799C0.388 1.50799 1.144 0.799988 2.644 0.799988ZM10.588 11.12L18.676 4.48399C18.964 4.24399 19.192 3.69199 18.832 3.19999C18.484 2.70799 17.848 2.69599 17.428 2.99599L10.588 7.62799L3.76 2.99599C3.34 2.69599 2.704 2.70799 2.356 3.19999C1.996 3.69199 2.224 4.24399 2.512 4.48399L10.588 11.12Z"
      fill="#ffffff"
    />
  </svg>
);

const Location = () => (
  <svg
    width="14"
    height="19"
    viewBox="0 0 14 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.13594 18.525C4.23281 16.1426 0 10.3684 0 7.125C0 3.18992 3.13396 0 7 0C10.8646 0 14 3.18992 14 7.125C14 10.3684 9.73438 16.1426 7.86406 18.525C7.41562 19.0928 6.58437 19.0928 6.13594 18.525ZM7 9.5C8.28698 9.5 9.33333 8.43496 9.33333 7.125C9.33333 5.81504 8.28698 4.75 7 4.75C5.71302 4.75 4.66667 5.81504 4.66667 7.125C4.66667 8.43496 5.71302 9.5 7 9.5Z"
      fill="#ffffff"
    />
  </svg>
);

export default function Footer() {
  return (
    <div
      className="flex flex-row px-10 py-20"
      style={{
        // use image as bg
        // fill bg with bg.png
        // Add gradient on top of bg.png
        backgroundImage: "url(/assets/footer/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex w-2/5"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Image
            width={600}
            height={300}
            src="/assets/footer/logo.png"
            alt="logo"
            className="ml-10"
          />
        </Link>
      </div>

      <div className="flex w-1/2 flex-row justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="mb-10 text-xl font-bold text-white">About Groops!</h1>

          <Link className="text-white" href="/">
            <p>how it works</p>
          </Link>

          <Link className="text-white" href="/">
            <p>About us</p>
          </Link>

          <Link className="text-white" href="/">
            <p>Groups</p>
          </Link>

          <Link className="text-white" href="/">
            <p>Profile</p>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="mb-10 text-xl font-bold text-white">Help</h1>

          <Link href="/" className="text-white">
            <p>Return Policy</p>
          </Link>

          <Link href="/" className="text-white">
            <p>FAQ</p>
          </Link>

          <Link href="/" className="text-white">
            <p>Help Center</p>
          </Link>
        </div>

        <div className="mr-20 flex flex-col gap-4">
          <h1 className="mb-10 text-xl font-bold text-white">Contact</h1>

          <div className="flex flex-row gap-2 text-white">
            <Phone />
            <p>(111) 111-1111</p>
          </div>

          <div className="flex flex-row gap-2 text-white">
            <Email />
            <p>email@groops.com</p>
          </div>

          <div className="flex flex-row gap-2 text-white">
            <Location />
            <p>Montreal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
