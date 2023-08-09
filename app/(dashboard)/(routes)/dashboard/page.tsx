import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashbord Page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
