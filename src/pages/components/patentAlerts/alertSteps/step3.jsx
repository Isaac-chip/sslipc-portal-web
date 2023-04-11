import StepRootWrap from "./stepRootWrap";
export default function Step3() {
  return (
    <StepRootWrap step={3}>
      <div className="flex items-center justify-center">
        <img className="w-62px h-62px" src="/icon/right.png" alt="" srcset="" />
        <p className="font-bold text-lg ml-2">设置完成！</p>
        <p className="text-blue-700">返回列表</p>
      </div>
      <div
        className="w-580px h-300px mx-auto mt-2 pt-27px pl-39px"
        style={{ background: "#F4F9FD" }}
      >
        <div className="flex mb-34px">
          <div style={{ color: "#555555" }}>预警名称</div>
          <div className="ml-4">导航专利</div>
        </div>
        <div className="flex mb-34px">
          <div style={{ color: "#555555" }}>监控事件</div>
          <div className="ml-4">首次公开</div>
        </div>
        <div className="flex mb-34px">
          <div style={{ color: "#555555" }}>监控内容</div>
          <div className="ml-4">发明专利</div>
        </div>
        <div className="flex mb-34px">
          <div style={{ color: "#555555" }}>预警频率</div>
          <div className="ml-4">每月1号</div>
        </div>
        <div className="flex mb-34px">
          <div style={{ color: "#555555" }}>收件邮箱</div>
          <div className="ml-4">546120756@qq.com</div>
        </div>
      </div>
    </StepRootWrap>
  );
}
