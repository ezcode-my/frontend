"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Play, CheckCircle, MessageSquare, Github, ChevronDown } from "lucide-react"

export default function CodingTestPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [activeTab, setActiveTab] = useState("run")
  const [hasResult, setHasResult] = useState(false)
  const [hasReview, setHasReview] = useState(false)
  const [isGithubConnected, setIsGithubConnected] = useState(false)
  const [autoCommit, setAutoCommit] = useState(false)
  const [selectedRepo, setSelectedRepo] = useState("")
  const [code, setCode] = useState(`function solution(nums) {
    // 여기에 코드를 작성하세요
    return nums;
}`)

  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
  ]

  const repositories = ["coding-test-solutions", "algorithm-practice", "problem-solving"]

  const handleRunCode = () => {
    setActiveTab("result")
    setHasResult(true)
    // 시뮬레이션: 2초 후 리뷰 활성화
    setTimeout(() => {
      setHasReview(true)
    }, 2000)
  }

  const handleReviewClick = () => {
    setActiveTab("review")
  }

  return (
    <div className="min-h-screen bg-[#0c151c] text-white">
      <div className="container mx-auto p-6">
      
  

          {/* 코드 에디터 및 터미널 영역 */}
          <div className="lg:col-span-2 flex flex-col">
            {/* 언어 선택 */}
            <div className="mb-4">
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-48 bg-transparent border-[#333] text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                  <SelectValue />
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a2332] border-[#333]">
                  {languages.map((lang) => (
                    <SelectItem
                      key={lang.value}
                      value={lang.value}
                      className="text-white hover:bg-[#214d35] focus:bg-[#214d35]"
                    >
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 코드 에디터 */}
            <div className="flex-1 mb-4">
              <div className="bg-[#1a2332] rounded-[10px] shadow-lg h-full">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full p-4 bg-transparent text-white font-mono text-sm resize-none outline-none rounded-[10px]"
                  placeholder="코드를 입력하세요..."
                />
              </div>
            </div>

            {/* 터미널 & 결과 패널 */}
            <div className="h-64">
              <div className="bg-[#1a2332] rounded-[10px] shadow-lg h-full">
                {/* 탭 헤더 */}
                <div className="flex items-center justify-between p-4 border-b border-[#333]">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={activeTab === "run" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("run")}
                      className={`${
                        activeTab === "run"
                          ? "bg-[#214d35] text-white"
                          : "text-[#ccc] hover:bg-[rgba(255,255,255,0.08)] hover:text-[#00d084]"
                      } transition-all`}
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Run
                    </Button>

                    <Button
                      variant={activeTab === "result" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => hasResult && setActiveTab("result")}
                      disabled={!hasResult}
                      className={`${
                        activeTab === "result" && hasResult
                          ? "bg-[#214d35] text-white border border-[#00d084]"
                          : hasResult
                            ? "text-[#00d084] hover:bg-[rgba(255,255,255,0.08)]"
                            : "text-[#555] cursor-not-allowed"
                      } transition-all`}
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Result
                    </Button>

                    <Button
                      variant={activeTab === "review" ? "default" : "ghost"}
                      size="sm"
                      onClick={handleReviewClick}
                      disabled={!hasReview}
                      className={`${
                        activeTab === "review" && hasReview
                          ? "bg-[#214d35] text-white"
                          : hasReview
                            ? "text-[#00d084] hover:bg-[rgba(255,255,255,0.08)]"
                            : "text-[#555] cursor-not-allowed"
                      } transition-all`}
                    >
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Review
                    </Button>
                  </div>

                  {/* GitHub 연동 */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#ccc] hover:bg-[rgba(255,255,255,0.08)] transition-all"
                      >
                        <Github
                          className={`w-4 h-4 ${
                            isGithubConnected ? "fill-[#00d084] text-[#00d084]" : "fill-[#555] text-[#555]"
                          }`}
                        />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#1a2332] border-[#333] text-white">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Github className="w-5 h-5" />
                          GitHub 연동
                          {isGithubConnected && <Badge className="bg-[#00d084] text-black">연동됨</Badge>}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-[#ccc] mb-2 block">레포지토리 선택</label>
                          <Select value={selectedRepo} onValueChange={setSelectedRepo}>
                            <SelectTrigger className="bg-[#0c151c] border-[#333] text-white">
                              <SelectValue placeholder="레포지토리를 선택하세요" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a2332] border-[#333]">
                              {repositories.map((repo) => (
                                <SelectItem key={repo} value={repo} className="text-white hover:bg-[#214d35]">
                                  {repo}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-[#ccc]">자동 푸시</label>
                          <Switch
                            checked={autoCommit}
                            onCheckedChange={setAutoCommit}
                            className="data-[state=checked]:bg-[#00d084]"
                          />
                        </div>

                        <div className="flex gap-2">
                          <Button
                            onClick={() => {
                              setIsGithubConnected(true)
                            }}
                            className="bg-[#214d35] hover:bg-[#276e48] text-white flex-1"
                            disabled={!selectedRepo}
                          >
                            연동하기
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[#333] text-[#ccc] hover:bg-[rgba(255,255,255,0.08)] bg-transparent"
                          >
                            닫기
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* 탭 컨텐츠 */}
                <div className="p-4 h-[calc(100%-60px)] overflow-y-auto">
                  {activeTab === "run" && (
                    <div className="space-y-4">
                      <Button
                        onClick={handleRunCode}
                        className="bg-[#214d35] hover:bg-[#276e48] active:bg-[#1e3e2c] active:scale-[0.98] text-white px-6 py-2 rounded-[10px] transition-all shadow-lg hover:shadow-xl"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        코드 실행
                      </Button>
                      <div className="text-[#ccc] text-sm">코드를 실행하려면 위 버튼을 클릭하세요.</div>
                    </div>
                  )}

                  {activeTab === "result" && hasResult && (
                    <div className="space-y-4">
                      <div className="bg-[#0c151c] p-3 rounded-[8px] font-mono text-sm">
                        <div className="text-[#00d084] mb-2">✓ 테스트 통과</div>
                        <div className="text-[#ccc]">
                          <div>실행 시간: 68ms</div>
                          <div>메모리 사용량: 42.1MB</div>
                          <div>통과율: 100% (3/3)</div>
                        </div>
                      </div>
                      <div className="text-[#ccc] text-sm">모든 테스트 케이스를 통과했습니다!</div>
                    </div>
                  )}

                  {activeTab === "review" && hasReview && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-[#ccc] text-sm">
                          토큰 사용량: <span className="text-[#00d084]">150 토큰</span>
                        </div>
                        <Button className="bg-[#214d35] hover:bg-[#276e48] active:bg-[#1e3e2c] active:scale-[0.98] text-white px-4 py-2 rounded-[10px] transition-all">
                          AI 리뷰 받기
                        </Button>
                      </div>
                      <div className="bg-[#0c151c] p-3 rounded-[8px] text-sm text-[#ccc]">
                        AI 리뷰를 받으려면 위 버튼을 클릭하세요.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
