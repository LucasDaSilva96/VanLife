async function getHostVans() {
  try {
    const res = await fetch(`/api/host/vans`);

    const data = await res.json();
    const { vans } = data;
    return vans;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getVans() {
  try {
    const res = await fetch(`/api/vans`);
    const { vans } = await res.json();
    return vans;
  } catch (err) {
    throw new Error(err.message);
  }
}

export { getHostVans, getVans };
