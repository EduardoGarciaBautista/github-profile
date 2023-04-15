import ArrowDown from "./arrow-down";
import Book from "./book";
import Branch from "./branch";
import Cancel from "./cancel";
import Check from "./check";
import Heart from "./heart";
import Github from "./github";
import Home from "./home";
import Location from "./location";
import Search from "./search";
import Star from "./star";
import Twitter from "./twitter";
import User from "./user";
import Link from "./link";


function Index({ name, ...rest }) {
  switch (name) {
    case "heart":
      return <Heart {...rest} />;
    case "book":
      return <Book {...rest} />;
    case "branch":
      return <Branch {...rest} />;
    case "arrow-down":
      return <ArrowDown {...rest} />;
    case "cancel":
      return <Cancel {...rest} />;
    case "check":
      return <Check {...rest} />;
    case "github":
      return <Github {...rest} />;
    case "home":
      return <Home {...rest} />;
    case "link":
      return <Link {...rest} />;
    case "location":
      return <Location {...rest} />;
    case "search":
      return <Search {...rest} />;
    case "star":
      return <Star {...rest} />;
    case "twitter":
      return <Twitter {...rest} />;
    case "user":
      return <User {...rest} />;
    default:
      return null;
  }
}
Index.defaultProps = {
  size: 16,
  color: "white",
};

export default Index;
