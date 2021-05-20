import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
      </div>
      <Circle color="#3cbc28" size={60} />
    </center>
  );
};

export default Loading;
