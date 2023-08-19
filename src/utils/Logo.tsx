interface Link {
  link: any;
  alt: string;
}
import logo from "./logo.png";
import logoName from "./logoName.png"
export const Logo: Link[] = [
  {
    link: logo,
    alt: "Logo Image",
  },
  {
    link: logoName,
    alt: "Name"
  }
];
