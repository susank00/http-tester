import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const onLogout = () => {
    localStorage.removeItem("accessToken");
    history.replace("/");
  };
  return (
    <>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};
export default Profile;
