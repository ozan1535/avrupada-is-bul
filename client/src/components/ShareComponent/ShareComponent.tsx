import { useState } from "react";
import {
  Share2,
  Twitter,
  Facebook,
  Link2,
  MessageCircle,
  Check,
} from "lucide-react";

const ShareComponent = ({
  title,
  url,
  description = "Check out this amazing blog post about web development and design patterns.",
}) => {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:bg-blue-50 hover:text-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-50 hover:text-blue-700",
      bgColor: "bg-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:bg-green-50 hover:text-green-600",
      bgColor: "bg-green-500",
    },
  ];

  const handleShare = (shareUrl) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    }
  };

  return (
    <div className="relative">
      {/* Main Share Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <Share2 size={18} />
          <span className="font-medium">Share</span>
        </button>

        {/* Quick Copy Button */}
        <button
          onClick={handleCopyLink}
          className={`inline-flex items-center gap-2 px-3 py-2 border-2 rounded-lg transition-all duration-200 ${
            copied
              ? "border-green-500 bg-green-50 text-green-700"
              : "border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {copied ? <Check size={18} /> : <Link2 size={18} />}
          <span className="text-sm font-medium">
            {copied ? "Copied!" : "Copy"}
          </span>
        </button>

        {/* Native Share Button (Mobile) */}
        {navigator.share && (
          <button
            onClick={handleNativeShare}
            className="inline-flex items-center gap-2 px-3 py-2 border-2 border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 lg:hidden"
          >
            <Share2 size={18} />
            <span className="text-sm font-medium">Share</span>
          </button>
        )}
      </div>

      {/* Share Menu Dropdown */}
      {showShareMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowShareMenu(false)}
          />

          {/* Menu */}
          <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-20 min-w-[280px] overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Share this post
              </h3>

              {/* Social Media Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {shareLinks.map((platform) => {
                  const IconComponent = platform.icon;
                  return (
                    <button
                      key={platform.name}
                      onClick={() => handleShare(platform.url)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${platform.color}`}
                    >
                      <div
                        className={`p-2 rounded-full ${platform.bgColor} text-white`}
                      >
                        <IconComponent size={16} />
                      </div>
                      <span className="font-medium text-gray-700">
                        {platform.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Copy URL Section */}
              <div className="pt-3 border-t border-gray-100">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Copy link
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={url}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-600"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      copied
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                    }`}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShareComponent;
