document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.getElementsByClassName('copy-email');
    const emailFields = document.getElementsByClassName('email-field');
  
    function setCopyButtonText(copyButton, isCopied) {
      const text = translations[currentLanguage].about[isCopied ? "copied" : "copy-email"];
      copyButton.textContent = text;
    }
  
    for (const emailField of emailFields) {
      emailField.addEventListener('click', () => {
        window.location.href = `mailto:${emailField.value}`;
      });
    }
  
    for (const copyButton of copyButtons) {
      const parentContainer = copyButton.closest('.email-container');
      const emailField = parentContainer?.querySelector('.email-field');
  
      if (emailField) {
        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(emailField.value)
            .then(() => {
              setCopyButtonText(copyButton, true);
              setTimeout(() => setCopyButtonText(copyButton, false), 2000);
            })
            .catch(err => {
              alert("Error al copiar el correo: " + err);
            });
        });
  
        setCopyButtonText(copyButton, false);
      }
    }
  });
  