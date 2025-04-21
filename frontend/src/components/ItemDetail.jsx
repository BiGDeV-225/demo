import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    try {
      setLoading(true);
      const data = await api.getItem(id);
      setItem(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch item');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await api.deleteItem(id);
        navigate('/');
      } catch (err) {
        setError('Failed to delete item');
        console.error(err);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>Item not found</div>;

  return (
    <div className="item-detail">
      <h2>Item Details</h2>
      
      <div className="detail-card">
        <h3>{item.title}</h3>
        <p className="description">{item.description || 'No description'}</p>
        
        <div className="metadata">
          <p><strong>Status:</strong> {item.is_active ? 'Active' : 'Inactive'}</p>
          <p><strong>Created:</strong> {new Date(item.created_at).toLocaleString()}</p>
          {item.updated_at && (
            <p><strong>Last Updated:</strong> {new Date(item.updated_at).toLocaleString()}</p>
          )}
        </div>
        
        <div className="actions">
          <Link to="/" className="btn-back">Back to List</Link>
          <Link to={`/items/${id}/edit`} className="btn-edit">Edit</Link>
          <button onClick={handleDelete} className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;