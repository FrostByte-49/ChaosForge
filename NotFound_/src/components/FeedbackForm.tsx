import { useState } from 'react';

export default function FeedbackFromHell() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: '',
    sanity: '100%'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Access Key 
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      sanity: `${Math.max(0, 100 - value.length * 2)}%`
    }));
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check If Access Key Is Available
    if (!accessKey) {
      alert('⚠️ FORM BROKEN! MISSING SECRET VOID KEY! 💀');
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          rating: formData.rating,
          feedback: formData.feedback,
          subject: `Feedback From Hell - ${formData.rating}`,
          from_name: 'Feedback From Hell Form',
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);

        // Reset Form After Submission
        setTimeout(() => {
          setFormData({ name: '', email: '', rating: '', feedback: '', sanity: '100%' });
          setSubmitted(false);
          setIsSending(false);
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }

    } catch (error) {
      console.error('Failed to send form:', error);
      alert('THE VOID REJECTED YOUR MESSAGE! TRY AGAIN LATER! 💀');
      setIsSending(false);
    }
  };

  const ratings = [
    { emoji: '💀', label: 'KILLED ME' },
    { emoji: '😱', label: 'TERRIFIED' },
    { emoji: '🤯', label: 'MIND BLOWN' },
    { emoji: '👻', label: 'I AM DEAD' },
    { emoji: '🤡', label: 'CLOWN APPROVED' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-red-900 to-blue-900 relative overflow-hidden min-h-screen">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-white" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl">
        <h2 className="text-7xl font-black text-center mb-8 animate-glitch">
          FEEDBACK FORM
          <span className="block text-3xl text-yellow-400 mt-4 animate-pulse">
            (PROCEED WITH CAUTION)
          </span>
        </h2>

        {/* Sanity Meter */}
        <div className="mb-8 p-6 bg-black border-4 border-red-500 rounded-lg">
          <div className="flex justify-between text-white font-bold mb-2">
            <span>YOUR SANITY LEVEL:</span>
            <span className="text-yellow-400">{formData.sanity}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-6">
            <div 
              className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-600 h-6 rounded-full transition-all duration-500"
              style={{ width: formData.sanity }}
            />
          </div>
          {parseInt(formData.sanity) < 50 && (
            <p className="text-red-400 text-center mt-2 animate-pulse">
              ⚠️ SANITY CRITICAL! ABORT FORM! ⚠️
            </p>
          )}
        </div>

        {submitted ? (
          /* Success Message From Hell */
          <div className="text-center p-12 bg-black border-8 border-green-500 rounded-2xl animate-bounce">
            <h3 className="text-6xl font-black text-green-400 mb-4 animate-pulse">
              FEEDBACK SUBMITTED! 🎉
            </h3>
            <p className="text-2xl text-white mb-4">
              Your screams have been recorded! 🔥
            </p>
            <p className="text-lg text-gray-400 animate-pulse">
              We'll probably ignore it! 🤡
            </p>
            <div className="mt-8 text-4xl animate-spin">🌀</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 bg-black bg-opacity-80 p-8 rounded-2xl border-4 border-white">
            
            {/* Input Name */}
            <div className={`relative ${isTyping && formData.name ? 'animate-shake' : ''}`}>
              <label className="block text-2xl font-black text-yellow-400 mb-4 animate-pulse">
                👻 YOUR NAME (OR ALIAS):
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 text-xl bg-gray-900 text-white border-4 border-cyan-400 rounded-lg 
                         focus:border-pink-500 focus:scale-105 transition-all duration-300
                         placeholder-gray-500 animate-pulse"
                placeholder="TYPE FAST BEFORE IT DISAPPEARS..."
                required
              />
              {formData.name && (
                <div className="absolute top-0 right-0 text-2xl animate-bounce">
                  {formData.name.length % 2 === 0 ? '👀' : '🔍'}
                </div>
              )}
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-2xl font-black text-green-400 mb-4 animate-pulse">
                📧 EMAIL (WE WON'T SPAM... PROBABLY):
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-4 text-xl bg-gray-900 text-white border-4 rounded-lg 
                         focus:scale-110 transition-all duration-300 placeholder-gray-500
                         ${formData.email.includes('@') ? 'border-green-500' : 'border-red-500 animate-pulse'}`}
                placeholder="real@email.com (OR NOT)"
                required
              />
              {formData.email && !formData.email.includes('@') && (
                <p className="text-red-400 mt-2 animate-pulse">THAT'S NOT AN EMAIL! OR IS IT? 🤔</p>
              )}
            </div>

            {/* Rating */}
            <div>
              <label className="block text-2xl font-black text-pink-400 mb-4 animate-pulse">
                🌡️ HOW MUCH DID THIS HURT?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {ratings.map((rating, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, rating: rating.label }))}
                    className={`p-4 text-2xl border-4 rounded-lg transition-all duration-300
                              ${formData.rating === rating.label 
                                ? 'border-yellow-400 bg-yellow-400 text-black scale-110 animate-bounce' 
                                : 'border-gray-600 bg-gray-800 text-white hover:scale-105'}`}
                  >
                    {rating.emoji}
                    <span className="block text-sm mt-2">{rating.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div>
              <label className="block text-2xl font-black text-blue-400 mb-4 animate-pulse">
                💀 YOUR SCREAM INTO THE VOID:
              </label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                rows={Math.max(3, Math.min(10, Math.floor(formData.feedback.length / 50) + 3))}
                className="w-full p-4 text-lg bg-gray-900 text-white border-4 border-purple-500 rounded-lg 
                         resize-none transition-all duration-500 focus:border-orange-500
                         placeholder-gray-500 animate-pulse"
                placeholder="TYPE YOUR FEEDBACK HERE... OR DON'T... I'M NOT YOUR BOSS..."
                required
              />
              <div className="flex justify-between text-white mt-2">
                <span className="text-sm">
                  CHARACTERS: {formData.feedback.length} 
                  {formData.feedback.length > 100 && ' 😱'}
                  {formData.feedback.length > 500 && ' 💀'}
                </span>
                <span className="text-sm">
                  SANITY COST: {formData.feedback.length * 2}%
                </span>
              </div>
            </div>

            {/* Captcha From Hell */}
            <div className="p-6 bg-red-900 border-4 border-yellow-400 rounded-lg">
              <label className="block text-2xl font-black text-white mb-4 animate-pulse">
                🤖 PROVE YOU'RE HUMAN (OR NOT):
              </label>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="w-6 h-6 transform scale-150" required />
                  <span className="text-white text-lg">I am not a robot 🤖</span>
                </div>
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="w-6 h-6 transform scale-150" />
                  <span className="text-white text-lg">I am a friendly ghost 👻</span>
                </div>
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="w-6 h-6 transform scale-150" />
                  <span className="text-white text-lg">I enjoy pain 💀</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.rating || !formData.feedback || isSending}
              className={`w-full py-6 text-3xl font-black border-4 rounded-lg transition-all duration-300
                       ${!formData.name || !formData.email || !formData.rating || !formData.feedback || isSending
                         ? 'bg-gray-600 border-gray-400 text-gray-400 cursor-not-allowed animate-pulse'
                         : 'bg-gradient-to-r from-green-500 to-blue-500 border-yellow-400 text-white hover:scale-105 hover:animate-bounce'}`}
            >
              {isSending ? (
                <span className="animate-pulse">SENDING TO VOID... 🌌</span>
              ) : !formData.name || !formData.email || !formData.rating || !formData.feedback ? (
                'FILL EVERYTHING FIRST! 📝'
              ) : (
                'SEND INTO THE VOID! 🚀'
              )}
            </button>

            {/* Disclaimer */}
            <p className="text-center text-gray-400 text-sm animate-pulse">
              ⚠️ By submitting, you agree to lose all sanity and possibly your soul. No refunds. ⚠️
            </p>
          </form>
        )}

        <div className="mt-12 text-center">
          <div className="inline-block bg-black border-4 border-white p-4 rounded-lg animate-pulse">
            <p className="text-white text-lg font-bold">
              {formData.feedback.length > 0 
                ? `"${formData.feedback.substring(0, 30)}..." - YOU, PROBABLY`
                : 'YOUR FEEDBACK WILL BE IGNORED! 🔥'}
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-glitch {
            animation: glitch 0.5s linear infinite;
          }
          input::placeholder, textarea::placeholder {
            color: #6B7280;
            opacity: 0.7;
          }
        `}
      </style>
    </section>
  );
}