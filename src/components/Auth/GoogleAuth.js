import React, { useEffect } from "react";
import { signIn, signOut } from "../../actions";
import { connect } from "react-redux";

const CLIENT_ID =
  "300526742445-6f4f8ljfru2uvsdeems9a7mmft91991l.apps.googleusercontent.com";
let auth;
const GoogleAuth = (props) => {
  //const [isSignedIn, setIsSignedIn] = useState(null)

  useEffect(() => {
    googleApi();
  }, []);

  const googleApi = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          //setIsSignedIn(auth.isSignedIn.get());
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  };

  const onAuthChange = (isSignedIn) => {
    //setIsSignedIn(auth.isSignedIn.get())
    isSignedIn
      ? props.signIn({
          userName: auth.currentUser.get().getBasicProfile().getGivenName(),
          userId: auth.currentUser.get().getBasicProfile().getId(),
        })
      : props.signOut();
  };

  const onSignInClick = () => {
    auth.signIn();
  };
  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderdAuthButton = () => {
    if (props.auth.isSignedIn === null) return null;
    if (props.auth.isSignedIn) {
      return (
        <div>
          <button onClick={onSignOutClick} className="ui red google button">
            <i className="google icon" />
            Sign Out
          </button>
           <span className="header">{props.auth.userName}</span>
        </div>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  return <div>{renderdAuthButton()}</div>;
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
