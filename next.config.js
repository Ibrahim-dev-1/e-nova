module.export = () => {
  return {
    source: "/",
    destination: "/kratos",
    permanente: true,
    plugins: ["next-optimized-images"],
  };
};
