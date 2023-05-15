import React from "react";

const aboutus = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay div */}
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-white/80 z-[2]" />
      <p className='w-3/4 z-10 font-thin mt-10 text-black text-center text-sm md:font-thin md:text-xl lg:font-semibold lg:text-xl'>
        <span className="text-3xl">ABOUT US..  </span>Leading Ladies is a website designed by college undergraduates to
        support and encourage women to become self-dependent and achieve their
        goals. Our website provides a platform for women to access various
        resources, network with other like-minded individuals, and explore
        opportunities in different fields. Our team comprises passionate
        individuals who believe in women empowerment and are dedicated to
        creating a positive impact on society. <br/>
        At Leading Ladies, we strive to create a community of women who support and uplift
        each other. We believe that every woman has the potential to achieve
        great things, and our website aims to provide the tools and resources
        needed to help women succeed. Our website features a range of resources,
        including job listings, training programs, networking opportunities, and
        a blog section that provides articles on various topics related to women
        empowerment and career growth. We also organize events and webinars that
        provide women with the opportunity to connect with experts in different
        fields and learn new skills. Our team is constantly working to improve
        our website and provide our users with the best possible experience. We
        welcome feedback from our users and are always looking for ways to make
        our website more effective and user-friendly. Thank you for visiting
        Leading Ladies. We hope that our website will empower and inspire you to
        achieve your goals and become a leading lady in your own right. 
      </p>
    </div>
  );
};

export default aboutus;
