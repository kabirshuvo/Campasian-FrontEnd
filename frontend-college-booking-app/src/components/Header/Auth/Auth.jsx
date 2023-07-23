import { sendUserAuthRequest } from "../../../api-helpers/Api-helper";
import AuthForm from "./AuthForm"

// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { userActions } from "../../store";
const Auth = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const onResReceived = (data) => {
  //   console.log(data);
  //   dispatch(userActions.login());
  //   localStorage.setItem("userId", data.id);
  //   navigate("/");
  // };
  const getData = (data) => {
    console.log(data);
    sendUserAuthRequest(data.inputs, data.signup).then((res) => console.log(res)
      ).catch((err) => console.log(err));
      // onResReceived
  };
  return (
    <div>
    <AuthForm onSubmit={getData} isAdmin={false} />
  </div>
  )
}

export default Auth