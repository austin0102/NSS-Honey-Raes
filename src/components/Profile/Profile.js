


import { CustomerForm } from "./CustomerForm";
import { EmployeeForm } from "./EmployeeForm";

export const Profile = () => {
  const localHoneyUser = localStorage.getItem("honey_user");
  const honeyUserObject = JSON.parse(localHoneyUser);

  return (
    <div>
      {honeyUserObject.staff ? (
        <EmployeeForm />
      ) : (
        <CustomerForm />
      )}
    </div>
  );
};
