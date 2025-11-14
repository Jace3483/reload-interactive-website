function Landing() {
    useEffect(() => {
            document.title = "Reload Interactive Studios";
        }, []);
    return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome! Click Home to enter Reload Interactive Studios</h1>
    </div>
  );
}

export default Landing;
