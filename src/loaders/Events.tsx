async function EventsLoader() {
  const response = await fetch('http://localhost:8080/evendsdts');

  if (!response.ok) {
    throw new Error('Fetching events failed.');
  }
  
  return response;
}

export default EventsLoader;