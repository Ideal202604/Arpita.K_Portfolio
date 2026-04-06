import React, { useEffect, useState } from 'react';
import './Conferences.css';

type NavItem = {
  id: string;
  label: string;
  hasSubmenu?: boolean;
  submenu?: string[];
};

type Community = {
  name: string;
  type: 'Learnyst' | 'Telegram';
};

const navItems: NavItem[] = [
  { id: 'getstarted', label: 'Get Started' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'products', label: 'Products' },
  { id: 'websiteApps', label: 'Website & Apps', hasSubmenu: true, submenu: ['Pages', 'Themes'] },
  { id: 'community', label: 'Community', hasSubmenu: true, submenu: ['Learnyst Communities', 'Telegram'] },
  { id: 'marketing', label: 'Marketing', hasSubmenu: true },
  { id: 'sales', label: 'Sales', hasSubmenu: true },
  { id: 'users', label: 'Users', hasSubmenu: true },
  { id: 'reports', label: 'Reports', hasSubmenu: true },
  { id: 'manage', label: 'Manage', hasSubmenu: true },
  { id: 'addons', label: 'Add - Ons', hasSubmenu: true },
  { id: 'security', label: 'Security', hasSubmenu: true },
  { id: 'subschools', label: 'Sub Schools', hasSubmenu: true },
  { id: 'settings', label: 'Settings' },
];

const Conferences: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({
    community: true,
  });
  const [activeNav, setActiveNav] = useState('community');
  const [activeSubItem, setActiveSubItem] = useState('Learnyst Communities');
  const [showModal, setShowModal] = useState(false);
  const [communityName, setCommunityName] = useState('');
  const [communityType, setCommunityType] = useState<'Learnyst' | 'Telegram'>('Learnyst');
  const [communities, setCommunities] = useState<Community[]>([]);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timer = window.setTimeout(() => setShowToast(false), 2800);
    return () => window.clearTimeout(timer);
  }, [showToast]);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const handleToggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleNavigate = (id: string) => {
    setActiveNav(id);
    triggerToast(`Navigating to ${id}...`);
  };

  const handleCreateCommunity = () => {
    const trimmedName = communityName.trim();

    if (!trimmedName) {
      window.alert('Please enter a community name.');
      return;
    }

    setCommunities((prev) => [...prev, { name: trimmedName, type: communityType }]);
    setCommunityName('');
    setCommunityType('Learnyst');
    setShowModal(false);
    triggerToast(`Community "${trimmedName}" created!`);
  };

  const handleDeleteCommunity = (index: number) => {
    const community = communities[index];

    if (!community) {
      return;
    }

    if (!window.confirm(`Delete "${community.name}"?`)) {
      return;
    }

    setCommunities((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
    triggerToast('Community deleted.');
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      triggerToast('Logged out successfully');
    }
  };

  return (
    <section id="conferences" className="ics-community-wrapper">
      <div className="ics-community-app">
        <aside className={`ics-sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
          <button
            type="button"
            className="ics-toggle-sidebar"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? '<' : '>'}
          </button>

          <div className="ics-sidebar-logo">
            <div className="ics-logo-box">iCS GLOBAL</div>
          </div>

          <div className="ics-sidebar-search">
            <input type="text" placeholder="Search" />
          </div>

          <nav className="ics-nav">
            {navItems.map((item) => {
              const isOpen = !!openSubmenus[item.id];
              const isActive = activeNav === item.id;

              return (
                <div key={item.id} className="ics-nav-block">
                  <button
                    type="button"
                    className={`ics-nav-item ${isActive ? 'active' : ''} ${isOpen ? 'open' : ''}`}
                    onClick={() => {
                      if (item.hasSubmenu) {
                        setActiveNav(item.id);
                        handleToggleSubmenu(item.id);
                        return;
                      }

                      handleNavigate(item.id);
                    }}
                  >
                    <span>{item.label}</span>
                    {item.hasSubmenu ? <span className="ics-chevron">v</span> : null}
                  </button>

                  {item.hasSubmenu ? (
                    <div className={`ics-sub-menu ${isOpen ? 'open' : ''}`}>
                      {(item.submenu || []).map((subItem) => (
                        <button
                          key={subItem}
                          type="button"
                          className={`ics-sub-item ${activeSubItem === subItem ? 'active' : ''}`}
                          onClick={() => {
                            setActiveSubItem(subItem);
                            setActiveNav(item.id);
                          }}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <button type="button" className="ics-sidebar-footer" onClick={handleLogout}>
            Log out
          </button>
        </aside>

        <main className="ics-main">
          <header className="ics-topbar">
            <div className="ics-topbar-search-wrap">
              <input type="text" placeholder="Search" />
            </div>
            <button type="button" className="ics-btn-upgrade">Upgrade</button>
            <button type="button" className="ics-btn-learner">View As Learner</button>
            <div className="ics-topbar-icon">?</div>
            <div className="ics-topbar-icon">!</div>
            <div className="ics-avatar">J</div>
          </header>

          <div className="ics-content">
            {communities.length === 0 ? (
              <div className="ics-community-card">
                <h2>Community</h2>
                <p>Create and manage Community</p>
              </div>
            ) : null}

            <div className={`ics-community-list ${communities.length > 0 ? 'show' : ''}`}>
              {communities.map((community, index) => (
                <div key={`${community.name}-${index}`} className="ics-comm-row">
                  <div className="ics-comm-icon">C</div>
                  <div className="ics-comm-info">
                    <div className="name">{community.name}</div>
                    <div className="type">{community.type} Community</div>
                  </div>
                  <div className="ics-comm-actions">
                    <button
                      type="button"
                      onClick={() => triggerToast(`Opening ${community.name}...`)}
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="del"
                      onClick={() => handleDeleteCommunity(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="ics-create-row">
              <button type="button" className="ics-btn-create" onClick={() => setShowModal(true)}>
                + Create
              </button>
            </div>
          </div>
        </main>

        <div
          className={`ics-modal-overlay ${showModal ? 'show' : ''}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <div className="ics-modal">
            <h3>Create Community</h3>
            <p>Set up a new community for your learners</p>
            <label htmlFor="commName">Community Name</label>
            <input
              id="commName"
              type="text"
              value={communityName}
              onChange={(event) => setCommunityName(event.target.value)}
              placeholder="e.g. ICS Batch 2025"
            />
            <label htmlFor="commType">Type</label>
            <select
              id="commType"
              value={communityType}
              onChange={(event) => setCommunityType(event.target.value as 'Learnyst' | 'Telegram')}
            >
              <option value="Learnyst">Learnyst Community</option>
              <option value="Telegram">Telegram</option>
            </select>
            <div className="ics-modal-footer">
              <button type="button" className="ics-btn-cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button type="button" className="ics-btn-save" onClick={handleCreateCommunity}>
                Create
              </button>
            </div>
          </div>
        </div>

        <div className={`ics-toast ${showToast ? 'show' : ''}`}>{toastMessage}</div>
      </div>
    </section>
  );
};

export default Conferences;
