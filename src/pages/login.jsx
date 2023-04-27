import Login from "./components/login/login";
import Modal from "./components/common/Modal";
export default function LoginPage() {
  return (
    <>
      <div className="relative w-full h-full">
        <Login></Login>
        <Modal show={true}>
            <div className="h-400px">
            sadssdf
            </div>
        </Modal>
      </div>
    </>
  );
}
