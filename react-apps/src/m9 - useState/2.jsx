import { useState } from "react";

const tugasBaru = () => {
    const [nama, setNama] = useState ( ["galang", "gilang"]);

    return (

        <div>
            <h2>Daftar Nama:</h2>
            <ul>
                {nama.map ((nama, index) => (
                    <li key = {index}>{nama}</li>
                ))}
            </ul>
            <button onClick={() => setNama ([...nama, "JAMH"])}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                Tambah Nama
            </button>
        </div>
    );
};

export default tugasBaru;