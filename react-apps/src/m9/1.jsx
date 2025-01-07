// 1. Memperbarui state menggunakan Array
import { useState } from "react";

const tugasBaru = () => {
    const [name, setNames] = useState ( ["galang", "gilang"]);

    return (

        <div>
            <h2>daftar nama:</h2>
            <ul>
                {names.map ((name, setName) => (
                    <li key = {index}>{name}</li>
                ))}
            </ul>
            <button onClick={() => setNames ([...names, "aruna"])}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                Tambah Nama
            </button>
        </div>
    );
};

export default tugasBaru;