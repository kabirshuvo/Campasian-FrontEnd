import { useDispatch } from "react-redux";
import { sendAdminAuthRequest } from "../../api-helpers/Api-helper";
import AuthForm from "../../components/Header/Auth/AuthForm"

import { useNavigate } from "react-router-dom";
import { adminActions } from "../../store";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onResReceived = (data) => {
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.id);
    localStorage.setItem("token", data.token);
    navigate("/");
  };
  const getData = (data) => {
    console.log("Admin", data);
    // sendAdminAuthRequest(data.inputs)
    //   .then((res)=> console.log(res))
    //   .then(()=> dispatch())
    //   .catch((err) => console.log(err));

      sendAdminAuthRequest(data.inputs)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
};

export default Admin