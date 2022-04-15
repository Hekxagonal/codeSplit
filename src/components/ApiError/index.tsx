const ApiError = () => {
  const errorStyles = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <div style={errorStyles}>
      <h1>Application is Dead :(</h1>
      <p>Failed to Fetch API, do you started the server and the database?</p>
      <h4>Did you try:</h4>
      <ol>
        <li>Verify your connection</li>
        <li>Verify the API</li>
        <li>Verify the DataBase</li>
        <li>Verify the fetch url</li>
      </ol>
    </div>
  );
};

export default ApiError;
