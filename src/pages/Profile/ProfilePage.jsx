import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import Button from '../../components/ui/Button'
import InputField from '../../components/forms/InputField'

// Name ke initials nikalna - "Ali Khan" → "AK"
const getInitials = (name = '') =>
  name.trim().split(/\s+/).map(w => w[0]?.toUpperCase()).join('').slice(0, 2)

// First letter capital - "admin" → "Admin"
const toTitleCase = (str = '') =>
  str.replace(/\b\w/g, c => c.toUpperCase())

const ProfilePage = () => {
  const { user } = useAuth()
  const [saved, setSaved] = useState(false)

  const handleSave = e => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="max-w-[600px]">
      <h1 className="text-text text-[22px] font-bold m-0 mb-6">My Profile</h1>

      <div className="flex items-center gap-4 mb-8 bg-surface border border-border rounded-lg p-5">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent-lt text-[22px] font-bold flex-shrink-0">
          {getInitials(user?.name)}
        </div>
        <div>
          <p className="text-text font-bold text-lg m-0">{user?.name}</p>
          <p className="text-muted text-[13px] mt-1 mb-0">{user?.email}</p>
          <span className="bg-accent/10 text-accent-lt text-[11px] px-2.5 py-0.5 rounded-full font-semibold inline-block mt-1.5">
            {toTitleCase(user?.role)}
          </span>
        </div>
      </div>

      <form onSubmit={handleSave} className="bg-surface border border-border rounded-lg p-6 flex flex-col gap-4">
        <h3 className="text-text m-0 mb-1 text-[15px] font-semibold">Edit Details</h3>
        <InputField label="Full Name"    name="name"     defaultValue={user?.name} />
        <InputField label="Email"        name="email"    defaultValue={user?.email} type="email" />
        <InputField label="New Password" name="password" type="password" placeholder="Leave blank to keep current" />
        <div className="flex gap-2.5 justify-end mt-1">
          {saved && <span className="text-success text-[13px] self-center">✓ Saved!</span>}
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfilePage
