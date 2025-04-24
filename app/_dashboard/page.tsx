'use client';

import { useEffect, useState } from 'react';
import { 
  MessageSquare, 
  FileText, 
  BarChart2, 
  Upload, 
  X,
  User,
  LogOut,
  Settings,
  ChevronDown
} from 'lucide-react';
import ProtectedRoute from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';

interface Message {
  id: number;
  content: string;
  timestamp: string;
}

interface Certificate {
  id: number;
  number: string;
}

interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  
  // Mock user data - replace with actual user data from your auth system
  const user: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff'
  };

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      try {
        // Simulate API calls
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleCertificateUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (certificateNumber) {
      setUploading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCertificates([...certificates, { id: Date.now(), number: certificateNumber }]);
        setCertificateNumber('');
      } catch (error) {
        console.error('Error uploading certificate:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <ProtectedRoute requireAuth>
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <div
            className={`flex items-center px-4 py-3 cursor-pointer ${
              activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            <BarChart2 className="w-5 h-5 mr-3" />
            <span>Overview</span>
          </div>
          <div
            className={`flex items-center px-4 py-3 cursor-pointer ${
              activeTab === 'messages' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('messages')}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            <span>Messages</span>
          </div>
          <div
            className={`flex items-center px-4 py-3 cursor-pointer ${
              activeTab === 'certificates' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('certificates')}
          >
            <FileText className="w-5 h-5 mr-3" />
            <span>Certificates</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="flex items-center space-x-3 focus:outline-none"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium text-gray-700">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-auto">
          {activeTab === 'overview' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Overview</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Total Messages</h3>
                  <p className="text-3xl font-bold text-blue-600">{messages.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Total Certificates</h3>
                  <p className="text-3xl font-bold text-green-600">{certificates.length}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Messages</h1>
              <div className="bg-white rounded-lg shadow">
                {messages.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No messages received yet
                  </div>
                ) : (
                  <div className="divide-y">
                    {messages.map((message) => (
                      <div key={message.id} className="p-4">
                        <p className="text-gray-800">{message.content}</p>
                        <p className="text-sm text-gray-500 mt-2">{message.timestamp}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Certificates</h1>
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <form onSubmit={handleCertificateUpload} className="flex gap-4">
                  <input
                    type="text"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    placeholder="Enter certificate number"
                    disabled={uploading}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  />
                  <button
                    type="submit"
                    disabled={uploading || !certificateNumber}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploading ? (
                      <div className="flex items-center gap-2">
                        <LoadingSpinner size="sm" color="text-white" />
                        Uploading...
                      </div>
                    ) : (
                      <>
                        <Upload className="w-5 h-5 mr-2" />
                        Upload
                      </>
                    )}
                  </button>
                </form>
              </div>
              <div className="bg-white rounded-lg shadow">
                {certificates.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No certificates uploaded yet
                  </div>
                ) : (
                  <div className="divide-y">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-semibold">Certificate #{cert.number}</p>
                          <p className="text-sm text-gray-500">Uploaded on {new Date(cert.id).toLocaleDateString()}</p>
                        </div>
                        <button
                          onClick={() => setCertificates(certificates.filter(c => c.id !== cert.id))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
}
