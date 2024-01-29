const parseEnv = () => {
  const envVariables = process.env;

  const rssVariables = Object.keys(envVariables)
    .filter((key) => key.startsWith("RSS_"))
    .reduce((acc, key) => {
      acc[key] = envVariables[key];
      return acc;
    }, {});

  const formattedOutput = Object.entries(rssVariables)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(formattedOutput);
};

parseEnv();
