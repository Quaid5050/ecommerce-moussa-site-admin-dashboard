import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/components/CalenderBox";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};


const CalendarPage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Calendar" />

        <CalendarBox />
      </div>
    </>
  );
};

export default CalendarPage;
