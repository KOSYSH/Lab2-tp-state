import { useState } from 'react';

function Profil() {
  const [user, setUser] = useState({
    nom: 'BOUDAD Yasser',
    age: 22,
    ville: 'Midelt'
  });

  const handleChange = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <input value={user.nom} onChange={(e) => handleChange('nom', e.target.value)} />
      <input value={user.age} onChange={(e) => handleChange('age', e.target.value)} />
      <p>{user.nom}, {user.age} ans, à {user.ville}</p>

    </div>
  );
}

export default Profil;
