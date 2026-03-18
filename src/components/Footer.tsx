import React, { useState } from 'react';
import { Linkedin, Mail, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import DeveloperModal from './DeveloperModal';

const NAV_LOGO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAwCAYAAACL+42wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuiSURBVHgB7VsLbFTHFZ332a/XP7AxNg6fEJQmfFIq9yMqVKSSNFYaWlSKooY0bVCbT0MV0p8obYzbRDS/lqhqKIiKtCiVghqVlDYQIiLbKbSkUAi4NFVEhIhJwHZsbLy73t237/Wc9bxlvH42WG15Vu0rXc97c+/M3Dlz585nn4WYoAmaoAkaE6QXsKbI+GyCDQ9ZnhxHaOQNG4TuPqvvwgfypVGFJpumuc0wjKimaQDBsS3L2pTNZvdQGA6HV2cymbsgs3Vd7w+FQnHodOD9lG3brYFA/NDWm0ViyZdjy2Kx4ApDd8oxAk7WFpqOYbAdRxN64HBwccd6TROOGEdUA8A6kDou4/0BVwggn1FlLgPYHEM3bhpGSyBg3L3xvujCZNOUzammycl0c7njcqp5yl5nQ87brypd9QYL6Bz4jwApn4HntCIfZuo7OYbXRq1sdrFl2dvXb00+X3PbhQM9ycAXbEc/rdTgiIar761+Awts7B8jfUN6oYAXmmKUBJA123Zu6Ela26Yv76x7v137iq2Z7a68sfHqhzy/gSW9A2BuB6g/wHMTgG5zBXj+F4BuRRz+B/gkdE6D+xhzVS9X9EOpVLbh+lUX6hMJcy3WvBSytQYxzukPW0S0dacIKlkceEMyPbkYPBv8RQC7lwAL7xicKo4Yy5NNVb9KtVTu8SPGjgnqb752TrJ56gvp5sq+zMEPffsKi9Fl7waIZ4QHuPD0t3/6YLSud1/F0xvG4eIlkvtnzTD0+A5DpFcKYRVhQl9pjCWAv0EYuZfhYYjQcWY3bEvNPd1R9Dsx3oie1N9StVvdHmUOzvmOGCXBOx+Su4lBXov98V+QRoUP5KvHNiyqmKqLzCfEf0hYtLYA2FaP/LlY9OqED+QrsCmTi5FWNpIOvTrZPGNW8vU512LrOpy9SfCewkyEgxjA/aTwgUa9Z/xvkmaahnAyw+4xnZ3CyFRPe9xxEnfqTtJMt0z9hSPONWpi6IYfHnuYWzAeHNRs8CzhA429bYh+CbTMjFnzhN3/sOZYUx0nU6FpmbXiQNVcr2K4XziLxC7Mh8dOFmKcHRDSlleHL2GjZcwpQgXFcaJWJlM8THXDgaeL8QZs0PQ4w9t6HgQz3HdAaMbRAVzIeotp6q1edWEHMJlH28J87Bh6hYcn/6/J1xjrRVnlWat7P+EcLFmazhj1uEkIBSKhl7SPn73oVQ7x9Sbh7ZlnhQ805oA1CpxLW9TbheT5yxQLw1tvLczk3hb8d+EDjcEz9OhNwl51MRapRYX5APU9LGpNwgcae4uXNuqFpgygboLHes2+neBO4QONPY9VFq8roCmBQGAzQL2xUABv7QbgvxU+kb+7Aq9Mw7kcsJSHotFoPVb8V/Eb2R0FhwKCSv4lHo8Ln2jMLV6qx1ZWltdblviUyGGlaQAxgh8Xq5Fe39/fPxseGSksLi/AX4NsoxD+/YDoK7C8jgqNII/HU59LJpP3FnrkcCRB/Sf0v4r0ovCRxl6Mdaz8fgvxUx8FqFTcB/3bkJ4RPpOvHusZY3VNQdK+IlQB6lnwJkz/zXiNizFA/oYCHGlDjtHFey68ajyR2pZI5eVpqxt71AuO4rb8qEMMxM5ugPk37FNfQd5L4B4xhsjXL2H4+U98/5QpRUZUS8jdQJeZvXDNojber2LxqozF4/EStYic8vyYI9HV1cWfZK76PcAETdD/H3l/wtMqgm29tUbtvraUtiE31bhfVOMx8xgLLY/i+KXVc7eRLNBn29Hy8nKzu7s7LeUqBSCLQtYv2xpsoyOM945Uh2rC5ZY27yTLByoqRLiz07OPrIM6XC+9dngZqRMSl9ZUp6A8dcJsR5E5YngcBtNO/BySapl6ON1SlUy+Onkp8/ALyotYROLgBFPcfcYR494JBoPr0flSpXgU8kNSN15Q5mtqO9hK3YT8dsrxfEgUbBJisdjXkZ8IBYP8LWvIQCWaax9Mv16dTv15Zu63LtiyTmkvz6wDvIM6sPmJArmrvytnfDS6uUCWk8P27bQB6Rb23cWAjLrfRrpaFDjpEINXrhRZLWttwyBgNennFyjCsrIhnHaiPPlgFY7wxJNOp2fhFPToxYsXfx8Oh6e75SEPUxdpAOyQoa8jVa9auUW6FXqVss4b0akFqhx1G5RBkbNlyLYrYmp77Kx1Xhf2gAfatsmP5Ni+y/KkxvoNWSwo2wtK2zSU0dxdBz8nZf8UuZBm5/5AjfnUCdkDBGys65D+HMfrteJK6Ef31Sxcc+ekWvm6W3ZuE7gGPAN8D8B5l6s0RvA1MTBF+J3rm+AsjFyF9xiYq3qZlLukY6RPyA/hOMUceNxjavvwrvspR9okhglZ373jmprGb0z/tHxlW9eAp4FrUW6T/MYrgfdbZJ20n1/J8HKmVNrGlOFLFBcX/5ptwjbeMxRLppwhAMX07bK/T8syxch7iqdtpDyUjHSQFBoqXh0wzXOmKW4uAPYRVRENLCWIqDSLMh9TgcX7/fDCarJruEsAcT7KZMBtqONJqf/WkiVL8nEc5R6QwDZ7AYtZMhOyE0VFRS8XylD2oxjYC7QL9f/ELe8Ci7wXoVNDBpgVbjkF2G3S9hoJrpDAPieBfdQtA92PIC8OGbd+k918r0UmkLWsNVY2W2UNvS8d9I5p0IxKOzBFdEyH+a6OfH8ylUq9iZBxFI2vKKhnGe9PwX9FHTtQRyem13XHjh2b5yrAeN2rTZegvwx1z0P5wj5EMf2fQPulqHc/5PnLGCLDFLLbUfY4GXcRW5Q2dFn3Kmn7cQzGz5S6c3LYXR6JRGoxuDPwfBeyIkjPC+V+wgtY03acmAw72kidEwO3TkLRyb/A+DSY8ZXP+Xx6CN7rcw2Z5itITiI9gvYYUz+r1i0b8PyVFfqTZDrIdnS4AcAs5jEXXssP7HoUYw1ZxmLMZ5DEc9ajbtrNGMtP97UCGftzjwT+GJ6/KbggOQ7DQ/6j6csdaUc8mWE0PwPv4E/UNow4KgZORkJOp3VofJf85bTbLQNj6mDMQj4zDnMRg85cGgzZ8oqKimc6Ozs58o4Ew9MGOJ+WW1jsS/cJJSUlX+rr6/sWZwwG6/v0OK/+oN2XAdgaaVtCDN4+ccBfQL++x2bQRp9H8xyMJMpXsS3uFqC3VVW4HLDqXo6dqUSj81FRBM9LMI0epnF43ouK+aOdez/KBSKIjhYDfJaNAeSu3t7eLoC6kqs38ULe4nyP8Y46FgCMG/D6hpIfqqmpmYN8xluGn0xtbW3biRMncnJb2lZWVvZh7FA2om4DevuRHkcsX0D7+KMi6C0Ohjso06ZNc2NnDEfjYvTlXXcMDXYwEilhe5TjWB1LJBLtrp1wmmdR3zrU80NkNaANrkVTwW1iBOLXeackqLfIvD9JsLhQ9fGfKsC2/AeLI5C5u4civLPH/NKvH4PQQ4YhvVgIGpEfRP4ZuShtRsc/D14OXgGdVuZj/0o9et8aWb+NOnrJrAdx7TQXFpRppBzpXuoj/zlx6dvYjLQxx9yBVFdXR1H3s1Juu/WRASL7oKHNHbLNjNsmGe3tkrbvkG0+rvSXX5qzv1tUEL08lkr8ybkIHpSUI8wVtl3u99xtHwHazUUKzx1uYRjajXIdA2HKdqQX6PC0JA8FYmDrwkD/FEb9lFsOnZsG3UdQlvepj6FD/axLtud+msmXFOxLI+UU7sJzj8wvQoe7FfvyZbhquyl0upT6HBlP3enO2zSe3XIx1i0P21NyQFj/ecg+kPocuIf4tSOe6zEAdfDsw7m2PIDlAsOvSnTEKwLMeFKE0Y5K49zbpRRiIQ0edLs0adKkEgBG8PI3UZyOqIvGO9geldLzMW0/EMrGf+bMmWFMuTJMySxUO/Ee4rvapkvt7e3nq6qqitChYgwEb7l6S0tLywFafh+plkFnbbVOypC6OlwP0jg69yC+c18ahb6j2kZ7GcbYbeBQgrrY74SKF5tEn7g2pMQETdAETdAA/Rv8gPYKkYa7mAAAAABJRU5ErkJggg==';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [devModalOpen, setDevModalOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <img src={NAV_LOGO} alt="ICS Global Logo" className="w-11 h-9 rounded-lg object-contain bg-card p-0.5 shadow-md" loading="lazy" />
              <div>
                <div className="font-bold text-foreground text-sm font-display">
                  Dr. Arpita Pankaj Kathane
                </div>
                <div className="text-xs text-muted-foreground">Director – ICS Global</div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="mailto:karpita2011@gmail.com" title="Email" aria-label="Email" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a href="http://linkedin.com/in/dr-arpita-kathane-8683461a1" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Copyright + Dev credit */}
            <div className="flex flex-col items-center sm:items-end gap-1">
              <p className="text-xs text-muted-foreground">
                © {year} Dr. Arpita Pankaj Kathane. {t.footer.rights}
              </p>
              <button
                onClick={() => setDevModalOpen(true)}
                className="flex items-center gap-1 text-xs text-black hover:text-black/80 transition-colors"
              >
                <Zap className="w-3 h-3 text-gold" />
                {t.footer.builtBy} <span className="font-bold text-green-600 ml-1">Wajid Daud Tamboli</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      <DeveloperModal open={devModalOpen} onClose={() => setDevModalOpen(false)} />
    </>
  );
};

export default Footer;
