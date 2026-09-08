const getHistory = () => {
  return localStorage.getItem("quotes");
};

const addHistory = (topic, message, approved) => {
  const quotes = getHistory();

  quotes.push({
    topic: topic,
    message: message,
    approved: approved,
  });
};

export { getHistory, addHistory };
