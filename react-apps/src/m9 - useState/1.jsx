// 1. Memperbarui state menggunakan Array
import { useState } from "react";

const tugasBaru = () => {
    const [Names, setNames] = useState ( ["galang", "gilang"]);

    return (

        <div>
            <h2>daftar nama:</h2>
            <ul>
                {Names.map ((name, index) => (
                    <li key = {index}>{name}</li>
                ))}
            </ul>
            <button onClick={() => setNames ([...Names, "aruna"])}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                Tambah Nama
            </button>
        </div>
    );
};

export default tugasBaru;