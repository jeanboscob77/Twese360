"use client";
import { useEffect, useState } from "react";
import { CheckCircle, Mail, Phone, Trash2, LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";

import { logout } from "@/app/store/adminSlice";
import AdminChat from "@/app/components/AdminChat";
// --- Types ---
interface ServiceRequest {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  notes?: string;
  service: string;
  status: string;
  created_at: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at: string;
}

interface Subscriber {
  id: number;
  email: string;
  created_at: string;
}

// --- Main Component ---
export default function AdminDashboard() {
  const dispatch = useDispatch();
  const [requests, setRequests] = useState<ServiceRequest[]>([]);

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [requestFilter, setRequestFilter] = useState<
    "all" | "pending" | "done"
  >("all");

  const fetchRequests = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/services");
      const data = await res.json();
      setRequests(Array.isArray(data) ? data : data.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch service requests");
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/contacts");
      const data = await res.json();
      setContacts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch contacts");
    }
  };

  const fetchSubscribers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/subscribers");
      const data = await res.json();
      setSubscribers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch subscribers");
    }
  };

  const markRequestDone = async (id: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/service-request/${id}/done`,
        {
          method: "PUT",
        }
      );
      if (!res.ok) throw new Error("Failed to update status");

      toast.success("Marked as done");
      fetchRequests();
    } catch (err) {
      console.error(err);
      toast.error("Error updating status");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete contact");
      toast.success("Contact deleted");
      fetchContacts();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting contact");
    }
  };

  const deleteSubscriber = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:5000/api/newsletter/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete subscriber");
      toast.success("Subscriber deleted");
      fetchSubscribers();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting subscriber");
    }
  };

  useEffect(() => {
    fetchRequests();
    fetchContacts();
    fetchSubscribers();
  }, []);

  const router = useRouter();
  const { token } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    if (!token) {
      router.push("/auth/admin/login"); // redirect if not logged in
    }
  }, [token, router]);

  if (!token)
    return (
      <div className="min-h-screen text-center flex justify-center items-center">
        Redirecting...
      </div>
    );

  // 🔹 Logout function
  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/admin/login");
  };
  console.log("Requests:", requests);
  const renderCard = (title: string, children: React.ReactNode) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );

  const filteredRequests = requests.filter((r) =>
    requestFilter === "all" ? true : r.status === requestFilter
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
        >
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>
      {/* Service Requests */}
      <AdminChat />
      <div className="mb-4 flex gap-2">
        {["all", "pending", "done"].map((status) => (
          <button
            key={status}
            onClick={() => setRequestFilter(status as typeof requestFilter)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              requestFilter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {renderCard(
        "Service Requests",
        filteredRequests.map((req) => (
          <div
            key={req.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {req.service}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Name:</span> {req.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {req.email}
              </p>
              {req.phone && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> {req.phone}
                </p>
              )}
              {req.address && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Address:</span> {req.address}
                </p>
              )}
              {req.notes && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Notes:</span> {req.notes}
                </p>
              )}
              <p
                className={`mt-2 text-sm font-medium ${
                  req.status === "pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Status: {req.status}
              </p>
            </div>
            {req.status === "pending" && (
              <button
                disabled={loading}
                onClick={() => markRequestDone(req.id)}
                className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium"
              >
                <CheckCircle className="w-5 h-5" /> Mark as Done
              </button>
            )}
          </div>
        ))
      )}

      {/* Contacts */}
      {renderCard(
        "Contacts",
        contacts.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Name:</span> {c.name}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Mail className="w-4 h-4" /> {c.email}
              </p>
              {c.phone && (
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Phone className="w-4 h-4" /> {c.phone}
                </p>
              )}
              <p className="text-sm text-gray-600">
                <span className="font-medium">Message:</span> {c.message}
              </p>
            </div>
            <button
              onClick={() => deleteContact(c.id)}
              className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-white font-medium"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        ))
      )}

      {/* Subscribers */}
      {renderCard(
        "Subscribers",
        subscribers.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {s.email}
              </p>
              <p className="text-xs text-gray-400">
                Subscribed: {new Date(s.created_at).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => deleteSubscriber(s.id)}
              className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-white font-medium"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
