export default function LoginDialogWraper({ children,title="新用户注册" }) {
  return (
    <>
      <img className="h-screen w-screen" src="/login/bg.png" alt="" srcset="" />
      <div
        className="absolute 2xl:mr-80 xl:mr-60 lg:mr-48"
        style={{ top: "16%", right: "0" }}
      >
        <div className="relative flex flex-col items-center">
          <p
            className="mb-2 text-38 text-blue"
            style={{ left: "62%", top: "10%" }}
          >
            {
                title
            }
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
