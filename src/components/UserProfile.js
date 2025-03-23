import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/UserProfile.css";
import { FaUser, FaBook } from "react-icons/fa";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("datos");
  const [telefono, setTelefono] = useState("");
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("Token no encontrado, redirigiendo al login.");
      navigate("/login");
      return;
    }

    console.log("Token obtenido:", token);

    axios.get('http://localhost:3000/api/user-profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);

        if (response.data.user) {
          setProfile(response.data.user);
          setTelefono(response.data.user.telefono || "");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el perfil:", error.response?.data || error.message);
        navigate("/login");
      });
  }, [navigate]);

  const handlePhoneChange = (value) => {
    setTelefono(value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setTelefono(profile.telefono || "");
    setEditMode(false);
  };

  const validatePhone = (phone) => {
    if (!phone || !isValidPhoneNumber(phone)) {
      alert("Por favor, introduce un número de teléfono válido.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("Intento de actualización sin token.");
      navigate("/login");
      return;
    }

    if (!validatePhone(telefono)) {
      return;
    }

    axios.put(
      "http://localhost:3000/api/auth/user-profile/phone", // Nota el prefijo '/api/auth'
      { telefono },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    
      .then((response) => {
        console.log("Teléfono actualizado:", response.data);
        setProfile((prevProfile) => ({ ...prevProfile, telefono }));
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error al actualizar el teléfono:", error.response?.data || error.message);
      });
  };

  return (
    <div className="user-container">
      <aside className="sidebar">
        <button
          className={activeTab === "datos" ? "active" : ""}
          onClick={() => setActiveTab("datos")}
        >
          <FaUser /> Mis Datos
        </button>
        <button
          className={activeTab === "cursos" ? "active" : ""}
          onClick={() => setActiveTab("cursos")}
        >
          <FaBook /> Mis Cursos
        </button>
      </aside>

      <main className="user-content">
        {profile ? (
          activeTab === "datos" ? (
            <section className="user-info">
              <h2>Perfil de {profile.nombre}</h2>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Rol:</strong> {profile.rol}
              </p>
              <p>
                <strong>Fecha de nacimiento:</strong>{" "}
                {profile.fechanacimiento || "N/A"}
              </p>

              {!editMode ? (
                <div className="phone-readonly">
                  <p>
                    <strong>Teléfono:</strong>{" "}
                    {profile.telefono ? profile.telefono : "N/A"}
                  </p>
                  <button onClick={handleEditClick} className="edit-btn">
                    Editar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="phone-edit-form">
                  <label htmlFor="telefono">Teléfono</label>
                  <PhoneInput
                    international
                    defaultCountry="AR"
                    value={telefono}
                    onChange={handlePhoneChange}
                    className="phone-input"
                  />
                  <div className="btn-group">
                    <button type="submit" className="save-btn">
                      Guardar
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelClick}
                      className="cancel-btn"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              )}
            </section>
          ) : (
            <section className="user-courses">
              <h2>Mis Cursos</h2>
              {profile.cursos && profile.cursos.length > 0 ? (
                <ul>
                  {profile.cursos.map((curso) => (
                    <li key={curso.id}>{curso.nombre}</li>
                  ))}
                </ul>
              ) : (
                <p>No has comprado ningún curso.</p>
              )}
            </section>
          )
        ) : (
          <p className="loading">Cargando...</p>
        )}
      </main>
    </div>
  );
};

export default UserProfile;