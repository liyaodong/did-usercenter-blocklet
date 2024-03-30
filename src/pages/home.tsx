function Home() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="block font-bold mb-2">应用 ID</span>
        <span className="">{window.blocklet?.appId}</span>
      </div>
      <div className="mb-4">
        <span className="block font-bold mb-2">应用版本</span>
        <span className="">{window.blocklet?.version}</span>
      </div>
      <div className="mb-4">
        <span className="block font-bold mb-2">应用名称</span>
        <span className="">{window.blocklet?.appName}</span>
      </div>
      <div className="mb-4">
        <span className="block font-bold mb-2">应用描述</span>
        <span className="">{window.blocklet?.appDescription}</span>
      </div>
      <div className="mb-4">
        <span className="block font-bold mb-2">应用 Url</span>
        <span className="">{window.blocklet?.appUrl}</span>
      </div>
    </div>
  );
}

export default Home;
