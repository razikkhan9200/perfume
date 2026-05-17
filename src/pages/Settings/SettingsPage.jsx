import { useAppContext } from '../../context/AppContext'
import Button from '../../components/ui/Button'

const SettingsPage = () => {
  const { theme, toggleTheme } = useAppContext()

  const rows = [
    {
      label: 'App Theme',
      desc: `Currently: ${theme}`,
      action: (
        <Button variant="secondary" onClick={toggleTheme} className="!text-[13px] !px-3.5 !py-1.5">
          Toggle Theme
        </Button>
      ),
    },
    {
      label: 'Notifications',
      desc: 'Email alerts are enabled',
      action: (
        <Button variant="secondary" className="!text-[13px] !px-3.5 !py-1.5">
          Manage
        </Button>
      ),
    },
    {
      label: 'Two-Factor Auth',
      desc: 'Add an extra layer of security',
      action: (
        <Button variant="ghost" className="!text-[13px] !px-3.5 !py-1.5">
          Enable 2FA
        </Button>
      ),
    },
    {
      label: 'Delete Account',
      desc: 'This action is irreversible',
      action: (
        <Button variant="danger" className="!text-[13px] !px-3.5 !py-1.5">
          Delete
        </Button>
      ),
    },
  ]

  return (
    <div className="max-w-[680px]">
      <h1 className="text-text text-[22px] font-bold m-0 mb-6">Settings</h1>
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        {rows.map(({ label, desc, action }, i) => (
          <div
            key={i}
            className={[
              'flex items-center justify-between px-5 py-4',
              i !== 0 ? 'border-t border-border' : '',
            ].join(' ')}
          >
            <div>
              <p className="text-text font-semibold text-sm m-0">{label}</p>
              <p className="text-muted text-xs mt-0.5 mb-0">{desc}</p>
            </div>
            {action}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SettingsPage
