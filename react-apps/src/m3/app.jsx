
function apps() {
  const props = {
    judul: "Judul Kartu Saya",
    isi: "Ini adalah isi kartu",
    warna: "biru"
  };

  return (
    <div>
      <h1>{props.judul}</h1>
      <p>{props.isi}</p>
      <p style={{color: props.warna}}>{props.warna}</p>
  );
}
