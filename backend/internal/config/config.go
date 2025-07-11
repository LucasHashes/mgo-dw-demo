package config

import "github.com/zeromicro/go-zero/rest"

type Config struct {
	rest.RestConf
	DataSource string
	Auth       struct {
		AccessSecret string
		AccessExpire int64
	}
	SplToken         string
	SysSolPrivateKey string
	SysMgoPrivateKey string
	SysGasObject     string
	HeliusRpc        string
}
