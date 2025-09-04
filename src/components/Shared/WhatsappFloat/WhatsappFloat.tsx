import styles from './WhatsappFloat.module.css';

export default function WhatsappFloat() {
  const handleShareClick = () => {
    const textToShare = encodeURIComponent('Check out this awesome link: https://example.com');
    const whatsappUrl = `whatsapp://send?text=${textToShare}&phone=+525610738792`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className={styles.container}>
      <i className="bi bi-whatsapp" onClick={handleShareClick}></i>
    </div>
  );
}
