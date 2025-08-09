import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, TrendingUp, Code, Star, ExternalLink, RefreshCw } from 'lucide-react';
import { layout, animations, typography } from '../utils/theme';
import { useLeetCodeStats } from '../hooks/useLeetCodeStats';
import { useGFGStats } from '../hooks/useGFGStats';
import leetcodeService from '../services/leetcodeService';
import gfgService from '../services/gfgService';

const CompetitiveProgramming = () => {
  const { stats: leetcodeStats, loading: leetcodeLoading, error: leetcodeError, refreshStats } = useLeetCodeStats();
  const { stats: gfgStats, loading: gfgLoading, error: gfgError, refreshStats: refreshGFGStats } = useGFGStats();

  const platforms = [
    {
      name: 'LeetCode',
      username: 'subhash613d',
      profileUrl: 'https://leetcode.com/u/subhash613d/',
      stats: leetcodeStats ? {
        solved: leetcodeStats.problems.totalSolved.toString(),
        easy: leetcodeStats.problems.easy.toString(),
        medium: leetcodeStats.problems.medium.toString(),
        hard: leetcodeStats.problems.hard.toString(),
        contestRating: leetcodeStats.contests.rating.toString(),
        badge: leetcodeService.getBadge(leetcodeStats.contests.rating).name,
        contests: leetcodeStats.contests.attendedContests.toString(),
        ranking: leetcodeService.formatNumber(leetcodeStats.contests.globalRanking),
        topPercentage: leetcodeStats.contests.topPercentage
      } : {
        solved: '1190',
        easy: '326',
        medium: '674',
        hard: '190',
        contestRating: '2000',
        badge: 'Knight',
        contests: '60',
        ranking: '12.0k',
        topPercentage: '8.5%'
      },
      color: 'from-gray-600 to-gray-800',
      icon: '💻',
      achievements: leetcodeStats ? [
        `Global Ranking: #${leetcodeService.formatNumber(leetcodeStats.contests.globalRanking)} (Top ${leetcodeStats.contests.topPercentage})`,
        `Contest Badge: ${leetcodeService.getBadge(leetcodeStats.contests.rating).name}`,
        `${leetcodeStats.contests.attendedContests} Contests Participated`,
        leetcodeStats.isFallback ? `📊 ${leetcodeStats.dataSource || 'Using cached data'}` : '🔴 Live data from LeetCode'
      ] : [
        'Global Ranking: #12.0k (Top 8.5%)',
        'Contest Badge: Knight',
        '60 Contests Participated',
        '📊 Real LeetCode statistics'
      ],
      isLive: !!leetcodeStats && !leetcodeStats.isFallback,
      loading: leetcodeLoading,
      error: leetcodeError
    },
    {
      name: 'GitHub',
      username: 'subhash23jan',
      profileUrl: 'https://github.com/subhash23jan',
      stats: {
        followers: '20',
        profileViews: '4000',
        publicRepos: '30',
        privateRepos: '15',
        totalRepos: '45',
        commits2025: '500',
        totalCommits: '1300+',
        badges: '5',
        badge: 'Active Developer'
      },
      color: 'from-gray-800 to-black',
      icon: '🐙',
      achievements: [
        '20 Followers on GitHub',
        '4000+ Profile Views',
        '45 Total Repositories (30 Public + 15 Private)',
        '500 Commits in 2025 (August)',
        '1300+ Total Commits',
        '5 GitHub Badges Earned'
      ]
    },
    {
      name: 'GeeksforGeeks',
      username: 'subhashbmsce',
      profileUrl: 'https://auth.geeksforgeeks.org/user/subhashbmsce',
      stats: gfgStats ? gfgStats.stats : {
        totalSolved: '699',
        school: '1',
        basic: '25',
        easy: '220',
        medium: '410',
        hard: '43',
        globalRating: '1805',
        overallScore: '2245',
        stars: '4⭐'
      },
      color: 'from-green-600 to-green-800',
      icon: '🌟',
      achievements: gfgStats ? gfgStats.achievements : [
        '699 Problems Solved',
        '4 Star Rating',
        'Global Rating: 1805',
        'Overall Score: 2245',
        '410 Medium Problems Solved',
        '43 Hard Problems Solved'
      ],
      isLive: !!gfgStats && !gfgStats.isFallback,
      loading: gfgLoading,
      error: gfgError,
      apiUrl: 'https://gfg-stats.tashif.codes/subhashbmsce'
    },
    {
      name: 'CodeChef',
      username: 'subhash_coder',
      profileUrl: '#',
      stats: {
        currentRating: '1676',
        division: 'Div 2',
        stars: '★★★',
        highestRating: '1684',
        globalRank: '11421',
        countryRank: '9931',
        contestsParticipated: '6',
        latestContest: 'Starters 176',
        latestRank: '96'
      },
      color: 'from-orange-600 to-orange-800',
      icon: '👨‍🍳',
      achievements: [
        'Current Rating: 1676 (Div 2)',
        'Highest Rating: 1684',
        '3 Star Coder (★★★)',
        'Global Rank: 11,421',
        'Country Rank: 9,931',
        '6 Contests Participated',
        'Latest Contest: Rank 96 in Starters 176',
        'Rating Gain: +106 in latest contest'
      ]
    }
  ];

  const skills = [
    { name: 'Data Structures', level: 90, icon: <Target className="w-5 h-5" /> },
    { name: 'Algorithms', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'Dynamic Programming', level: 80, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Graph Theory', level: 75, icon: <Award className="w-5 h-5" /> },
    { name: 'Problem Solving', level: 95, icon: <Trophy className="w-5 h-5" /> },
    { name: 'Time Complexity', level: 88, icon: <Star className="w-5 h-5" /> }
  ];

  const codingStats = {
    totalProblems: leetcodeStats ? leetcodeStats.problems.totalSolved.toString() : '1190',
    contestsParticipated: leetcodeStats ? leetcodeStats.contests.attendedContests.toString() + '+' : '60+',
    achievements: '15+',
    languages: ['C++', 'Java', 'Python', 'JavaScript'],
    yearsActive: '3+',
    currentRating: leetcodeStats ? leetcodeStats.contests.rating : 2000
  };

  return (
    <section id="competitive-programming" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-gray-500/20 to-gray-700/20 rounded-full blur-3xl"></div>

      <div className={layout.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">Competitive Programming</span>
          </div>
          <h2 className={`${typography.h2} text-gray-900 dark:text-white mb-4`}>
            Coding Profiles & Achievements
          </h2>
          <p className={`${typography.body} text-gray-600 dark:text-gray-300 max-w-2xl mx-auto`}>
            My journey through competitive programming platforms, showcasing problem-solving skills, 
            algorithmic thinking, and consistent coding practice across various platforms.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
        >
          {Object.entries(codingStats).slice(0, 5).map(([key, value], index) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 card-hover-fire modern-hover"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {Array.isArray(value) ? value.length + '+' : value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coding Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className={`${typography.h3} text-gray-900 dark:text-white text-center mb-8`}>
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 card-hover-fire skills-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {skill.level}% Proficiency
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 card-hover-fire modern-hover">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl p-3 bg-gradient-to-br ${platform.color} text-white rounded-2xl shadow-lg relative`}>
                      {platform.loading && (
                        <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                          <RefreshCw className="w-6 h-6 animate-spin text-white" />
                        </div>
                      )}
                      {platform.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`${typography.h4} text-gray-900 dark:text-white`}>
                          {platform.name}
                        </h3>
                        {platform.isLive && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                            LIVE
                          </span>
                        )}
                        {platform.error && (
                          <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
                            OFFLINE
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        @{platform.username}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {platform.name === 'LeetCode' && (
                      <motion.button
                        onClick={refreshStats}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        disabled={platform.loading}
                      >
                        <RefreshCw className={`w-5 h-5 ${platform.loading ? 'animate-spin' : ''}`} />
                      </motion.button>
                    )}
                    {platform.name === 'GeeksforGeeks' && (
                      <motion.button
                        onClick={refreshGFGStats}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        disabled={platform.loading}
                      >
                        <RefreshCw className={`w-5 h-5 ${platform.loading ? 'animate-spin' : ''}`} />
                      </motion.button>
                    )}
                    <motion.a
                      href={platform.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Platform Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(platform.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl card-hover-fire modern-hover">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {platform.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="p-8 bg-gradient-to-r from-gray-800 to-black rounded-3xl text-white">
            <h3 className={`${typography.h3} mb-4`}>
              Let's Code Together!
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on coding challenges or discussing algorithms? 
              Feel free to connect with me on any of these platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {codingStats.languages.map((lang, index) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
