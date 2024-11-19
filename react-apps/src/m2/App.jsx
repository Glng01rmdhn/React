// cd buat kalo misalnya npmnya error
// mengambil data dari object dalam jsx
const user = {
  name: 'galang rambu anarki',
  age: 30,
country: 'indonesia',
};
function Testing(){
  return(
    <>
    <h1>PUSINGGGGGG!!!!!!!</h1>
    <p>react ngajak berantrem</p>
    <div>
      <button style={{ backgroundColor: 'green', color: 'white' }}>Klik Saya</button>
    </div>
    {/* css dalam jsx */}
    <h1 style={{ color: 'purple', stroke: 'red', fontSize: '90px' }}>jsx pake css gini kah?</h1>  

    {/* mengambil data dari object */}
    <p>nama : {user.name}</p>
    <p>umur : {user.age}</p>
    <p>negara : {user.country}</p>

    {/* mengambil image */}

    <img src="https://berita.99.co/wp-content/uploads/2022/04/puisi-ayah.jpg" alt="MY image" />

    </>
  )
}



export default Testing;

