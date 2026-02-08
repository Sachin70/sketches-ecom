'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Lock, Bell, Shield, CheckCircle2 } from 'lucide-react'

export default function AccountSettings() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    marketing: true,
  })
  const [isSaved, setIsSaved] = useState(false)

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
  }

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-6">
      {/* Password Settings */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="text-primary" size={24} />
          <h2 className="text-2xl font-playfair font-bold text-foreground">Change Password</h2>
        </div>
        
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
            <Input
              type="password"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
            <Input
              type="password"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Confirm New Password</label>
            <Input
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {isSaved ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} />
                Password Updated!
              </span>
            ) : (
              'Update Password'
            )}
          </Button>
        </form>
      </div>

      {/* Notification Settings */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-primary" size={24} />
          <h2 className="text-2xl font-playfair font-bold text-foreground">Notification Preferences</h2>
        </div>
        
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() => handleNotificationChange('email')}
              className="w-5 h-5 border-2 border-primary rounded cursor-pointer"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-foreground">SMS Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates via SMS</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={() => handleNotificationChange('sms')}
              className="w-5 h-5 border-2 border-primary rounded cursor-pointer"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-foreground">Marketing Emails</p>
              <p className="text-sm text-muted-foreground">Receive promotional offers and updates</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.marketing}
              onChange={() => handleNotificationChange('marketing')}
              className="w-5 h-5 border-2 border-primary rounded cursor-pointer"
            />
          </label>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="text-primary" size={24} />
          <h2 className="text-2xl font-playfair font-bold text-foreground">Privacy & Security</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Your data is secure and encrypted. We never share your personal information with third parties.
          </p>
          <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  )
}



